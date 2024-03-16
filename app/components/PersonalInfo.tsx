import Image from "next/image";

export default function PersonalInfo() {
  return (
    <div className="flex flex-col items-center gap-2 py-2 pb-8">
      <div className="bg-[#FFF] h-24 w-24 rounded-full overflow-hidden drop-shadow-[0_4px_3px_rgba(0,0,0,0.5)]">
        <Image
          src="/asset/profile.jpeg"
          alt="profile"
          sizes="100vh"
          width={100}
          height={100}
          style={{
            objectFit: "cover",
            scale: 1.5,
            marginTop: "30px",
            marginLeft: "10px",
          }}
        />
      </div>
      <p className="p-2 w-3/4 text-sm text-justify indent-2.5 hyphens-auto fade-in">
        This is <span className="font-bold">Nuttayos Suvisuttikasame</span>, a
        full stack developer with experience in warehouse system, system
        analysis, root cause investigation and resource management. I have
        expertise in web application development both backend(
        <span className="font-bold">Nestjs</span>) and frontend(
        <span className="font-bold">React</span>) and also familar with agile
        and waterfall methodology. Due to various perspectives on my journey,
        that makes me always keep improving both soft and hard skills. Because I
        believe we are born to be solution-makers, no matter which field you are
        in, you&apos;ll face problems. I realize and ready to tackle it.
        <br />
        When not coding, I love football, collecting manga and usually spending
        time on YouTube. Hopefully, I&apos;ll make many connections in order to
        write a story together.
      </p>
      <div className="flex text-sm fade-out max-[640px]:flex-col">
        <div className="mr-24 max-[640px]:mr-0">
          <h2 className="text-lg font-bold">Tools</h2>
          <ul className="list-disc">
            <li>Client: React, Nextjs</li>
            <li>Server: Nestjs, Nodejs</li>
            <li>Database: PostgreSQL, MySQL</li>
            <li>Infra: Docker</li>
            <li>Ver.control: Git</li>
            <li>Manage: Jira, Asana</li>
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-bold">Interpersonal skill</h2>
          <ul className="list-disc">
            <li>Team player</li>
            <li>Responsibility and Integrity</li>
            <li>Management and Problem solving</li>
          </ul>
        </div>
        <div></div>
      </div>
    </div>
  );
}
