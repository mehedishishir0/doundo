'use client'
import React, { useState } from 'react'
// import { useRouter } from 'next/navigation'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
// import { toast } from 'sonner'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useChangePassword } from '@/hooks/useprofile'
import { useSession } from 'next-auth/react'

const passwordSchema = z.object({
  oldPassword: z.string().min(1, 'Old password is required'),
  newPassword: z.string().min(6, 'Password must be at least 6 characters'),
  confirmPassword: z.string().min(1, 'Please confirm your password'),
}).refine((data) => data.newPassword === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

type PasswordFormValues = z.infer<typeof passwordSchema>;

const ChangePassword = () => {
  const [isPending, setIsPending] = useState(false);
  const {data:session}=useSession();
  const { mutate } = useChangePassword();

  const form = useForm<PasswordFormValues>({
    resolver: zodResolver(passwordSchema),
    defaultValues: {
      oldPassword: '',
      newPassword: '',
      confirmPassword: '',
    },
  });
  const token=session?.user.accessToken||'';

  function onSubmit(values: PasswordFormValues) {
    setIsPending(true);
    console.log('Password change values:', values);
    mutate(
      { oldPassword: values.oldPassword, newPassword: values.newPassword, token },
      {
       
        onSettled: () => {
          setIsPending(false);
        },
      }
    );
  }

  return (
    <div className='max-w-2xl w-full'>
      <div className='mb-8'>
        <h2 className='text-2xl font-bold text-gray-900'>Change Password</h2>
        <p className='text-gray-500 mt-1'>Ensure your account is using a long, random password to stay secure.</p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
          
          <FormField
            control={form.control}
            name="oldPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Old Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="••••••••" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="newPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>New Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="••••••••" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirm Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="••••••••" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className='pt-2'>
            <Button
              type="submit"
              disabled={isPending}
              className="bg-primary hover:bg-primary/90 text-white min-w-35"
            >
              {isPending ? "Updating..." : "Update Password"}
            </Button>
          </div>

        </form>
      </Form>
    </div>
  )
}

export default ChangePassword