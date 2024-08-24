import { Box } from "@mui/material";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import nik from "../../assets/nik.jpg";
import vijay from "../../assets/vijay.jpg"
import arni from "../../assets/arni.jpg"

const TeamName = () => {
  return (
    <Box>
      <section className="bg-white">
        <div className="container px-6 py-8 m-8 mx-auto">
          <h2 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl">
            Our Team
          </h2>

          <div className="grid gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-3">
            {teamData.map((member, index) => (
              <div key={index} className="w-full max-w-xs mx-auto text-center">
                <img
                  className="object-cover object-center w-full h-72 mx-auto rounded-lg"
                  src={member.photo}
                  alt={member.name}
                />
                <div className="mt-4">
                  <h3 className="text-lg font-medium text-gray-700">
                    {member.name}
                  </h3>
                  <span className="mt-1 font-medium text-gray-600 ">
                    {member.position}
                  </span>
                </div>
                <div className="flex justify-center gap-4 mt-4">
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-blue-600"
                    >
                      <FaLinkedin size={24} />
                    </a>
                  )}
                  {member.github && (
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-gray-800"
                    >
                      <FaGithub size={24} />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Box>
  );
};

const teamData = [
  {
    name: "Nikhil Ranjan",
    position: "Full-Stack Developer & Data Scientist",
    photo: nik,
    linkedin: "https://www.linkedin.com/in/dcoder-nikhil",
    github: "https://github.com/Dcoder-Nikhil",
  },
  {
    name: "Asad Ijtaba",
    position: "Data Scientist",
    photo:arni,
    linkedin: "http://www.linkedin.com/in/asad-hasan-63028a282",
    github: "https://github.com/AsadIjtaba",
  },
  {
    name: "Vijay Hursh",
    position: "Data Scientist",
    photo: vijay,
    linkedin: "https://www.linkedin.com/in/vijay-hursh-267278251",
    github: "https://github.com/Vijay-Hursh1590",
  },
];

export default TeamName;
