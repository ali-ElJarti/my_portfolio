
import SocialLink from "./SocialLink";

const Contact = () => {
  return (
    <div className="wrapper">
      <div className="max-w-5xl mx-auto flex flex-col gap-4 items-center justify-center">
        <h2 className="text-2xl font-bold">Let's Build Amazing Solutions Together!</h2>
        <p className="text-lg tracking-wide font-medium text-center">
        I am always open to collaborating on innovative projects, streamlining workflows, or leveraging cutting-edge technologies to deliver impactful solutions for your organization.
        </p>
        <a href="mailto:ali.eljarti@um6p.ma">
          <button className="w-52 h-14 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-950 text-xl font-bold text-white rounded-lg hover:from-indigo-950 hover:to-blue-600 duration-300">
            Say Hello
          </button>
        </a>
      </div>
      <div className="mt-8 flex items-center flex-wrap   gap-8 justify-center">
        <SocialLink
          title="Linkedin"
          link="https://www.linkedin.com/in/ali-el-jarti/"
        />
        <SocialLink
          title="Facebook"
          link="https://www.facebook.com/ali.el.jarti.0"
        />

      </div>
    </div>
  );
};

export default Contact;
