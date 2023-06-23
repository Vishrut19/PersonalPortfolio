/* eslint-disable react/jsx-no-comment-textnodes */
import skilldata from "../data/skilldata";

const Skill = () => {
  const skills = skilldata;

  return (
    <>
      <div name="skills" className="w-full h-screen bg-[#122b52] text-gray-300">
        {/* Container */}
        <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
          <div>
            <p className="text-4xl font-bold inline border-b-4 border-pink-600 ">
              Skills
            </p>
            <p className="py-4">
              // These are the technologies I've worked with
            </p>
          </div>
          <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
            {skills.map((skill) => (
              <div
                className="shadow-md shadow-[#040c16] hover:scale-110 duration-500"
                key={skill.id}
              >
                <img className="w-20 mx-auto" src={skill.img} alt="HTML icon" />
                <p className="my-4">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Skill;
