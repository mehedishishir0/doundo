import MeetOurTeam from "@/components/about/MeetOurTeam";
import OurMission from "@/components/about/OurMission";
import OurStory from "@/components/about/OurStory";
import GetInTouch from "@/components/shared/GetInTouch";

const page = () => {
  return (
    <div>
      <OurStory />
      <OurMission />
      <MeetOurTeam />
      <GetInTouch />
    </div>
  );
};

export default page;
