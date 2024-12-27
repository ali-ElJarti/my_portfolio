import Title from "./Title";
import { MdWork } from "react-icons/md";
import { SiReactivex, SiToptal, SiFreelancer, SiFiverr } from "react-icons/si";
import ExperienceCard from "./ExperienceCard";

const Experience = () => {
  return (
    <div className="wrapper">
      <Title text="Experiences" icon={<MdWork />} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

      <ExperienceCard
          title="Capgemini Engineering"
          subTitle="Student Embassador Apr 2024 - present"
          icon={<SiFreelancer />}
        />

      
      <ExperienceCard
          title="Managem S.A"
          subTitle="System Integration Engineer Intern / Jul 2024 - Aug 2024"
          icon={<SiToptal />}
        />

      <ExperienceCard
          title="MG2 - Capgemini Engineering"
          subTitle="Embedded Systems Engineer Intern / Apr 2023 - Jul 2023"
          icon={<SiReactivex />}
          
        />

      <ExperienceCard
          title="Freelancer"
          subTitle="Electronics courses for college students 2024 - 2023"
          icon={<SiFiverr />}
        />






      </div>
    </div>
  );
};

export default Experience;
