import { UilFacebookF } from "@iconscout/react-unicons";
export const ProjectItem = ({ title, description, bgcolor, uid, icon }) => {
  return (
    <div className="w-full py-6 rounded-xl px-5 mb-3 hover:shadow-xl bg-blue" key={uid}>
      <div className="flex items-center justify-start">
        <div className="bg-white rounded-full p-2 text-primary mr-5">
          <img src={icon} alt="" />
          <UilFacebookF />
        </div>
        <div>
          <div className="text-white text-xl font-medium">{title}</div>
        </div>
      </div>
    </div>
  );
};
