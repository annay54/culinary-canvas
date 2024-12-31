import Link from "next/link";
import React from "react";

export default function About () {

    const team = [
        {
            name: "Anna Ye",
            github: "https://github.com/annay54",
            email: "someone@example.com",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2ZpbGV8ZW58MHx8MHx8fDI%3D"
        },
        {
            name: "Annie Ye",
            github: "https://github.com/annay54annay54annay54",
            email: "someonesomeone@example.com",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2ZpbGV8ZW58MHx8MHx8fDI%3D"
        },
    ]

    const TeamCard = ({name, github, email, image}) => {
        const LinkComp = ({link, icon, text}) => {
            return (
                <div className="flex flex-row hover:text-secondary items-center w-full justify-center gap-1">
                    <i className={icon}></i>
                    <Link href={link} target="_blank" rel="noreferrer">
                        <p className="break-all text-center hover:text-secondary">{text}</p>
                    </Link>
                </div>
            )
        }

        return (
            <div className="flex flex-col items-center max-sm:mx-auto gap-2 w-[250px] p-4 py-8 bg-primary text-white">
                <img src={image} alt={name} className="w-24 h-24 object-cover rounded-full" />
                <h3 className="">{name}</h3>
                <div>
                    <LinkComp link={github} icon="fa-brands fa-github" text={github.replace("https://github.com/", "")} />
                    <LinkComp link={`mailto:${email}`} icon="fa-solid fa-at" text={email} />
                </div>
            </div>
        )
    }

    return (
        <div className="flex flex-col ">
            {/* hero and body */}
            <div className="flex flex-col">
                <div className="w-fulls px-14 pt-24 pb-4 bg-primary">
                <h1 className="text-white max-sm:text-3xl">About CulinaryCanvas</h1>
                </div>
                <div className="flex flex-col md:flex-row gap-4 p-8 md:py-14 md:px-[5%] lg:px-[15%]">
                    <img src="aboutUsImage.svg" alt="about us" className="w-full max-w-[300px] md:max-w-[400px] h-auto mx-auto" />
                    <p className="text-lg flex items-center">Here at CulinaryCanvas, we provide you delicious, easy-to-follow recipes written by fellow food enthusiasts. CulinaryCanvas forms a community of kitchen experts and food lovers who spreads inspiration to one another by sharing culinary creations and experiences.</p>
                </div>
            </div>

            {/* our team */}
            <div className="flex flex-col mb-8">
                <h2 className="text-secondary text-center max-sm:text-2xl font-medium sm:font-semibold">Our Team</h2>
                <div className="flex max-sm:flex-col flex-wrap justify-center gap-4 p-8 md:px-[5%] lg:px-[15%]">
                    {team.map((member, index) => (
                        <TeamCard key={index} name={member.name} github={member.github} email={member.email} image={member.image} />
                    ))}
                </div>
            </div>
        </div>
    )
}
