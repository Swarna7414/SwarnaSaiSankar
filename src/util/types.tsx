import React from "react";
import { ImLinkedin } from "react-icons/im";
import { BiLogoGmail } from "react-icons/bi";
import { FaSquareGithub } from "react-icons/fa6";
import { FaJava } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { TiHtml5 } from "react-icons/ti";
import { SiTypescript } from "react-icons/si";
import { SiSpringboot } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiJunit5 } from "react-icons/si";
import { SiMui } from "react-icons/si";
import { SiAmazonec2 } from "react-icons/si";
import { SiAmazonecs } from "react-icons/si";
import { SiAwslambda } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaJenkins } from "react-icons/fa";
import { SiPostman } from "react-icons/si";
import { FaDocker } from "react-icons/fa";
import { SiKubernetes } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";


interface links {
    logo: React.ReactElement;
    name: string;
    value: string;
}

export interface alllinks{
    links:links[]
}

export interface experience{
    date:string;
    title:string;
    company:string;
    description:string[];
}

export const displaylinks:links[]=[
    {
        logo: <ImLinkedin />,
        name: "LinkedIn",
        value: "www.linkedin.com/in/swarna-sai-sankar-a1084a203"
    },
    {
        logo: <BiLogoGmail/>,
        name:"Gmail",
        value:"swarnasaisankar333@gmail.com"
    },
    {
        logo: <FaSquareGithub/>,
        name: "GitHub",
        value:"https://github.com/Swarna7414"
    }
]

interface stringWithLink {
    logo:React.ReactElement;
    skill:string;
}

export interface alllist{
    alllistuse:stringWithLink[];
}

export const Languages:stringWithLink[]=[
    {
        logo:<FaJava/>,
        skill: "Java"
    },
    {
        logo:<FaPython/>,
        skill:"Python"
    },
    {
        logo:<TiHtml5/>,
        skill:"HTML & CSS"
    },
    {
        logo:<SiTypescript/>,
        skill:"TypeScript"
    }
]

export const frameworks:stringWithLink[]=[
    {
        logo:<SiSpringboot/>,
        skill: "Spring Boot"
    },
    {
        logo:<FaReact/>,
        skill:"React"
    },
    {
        logo:<RiTailwindCssFill/>,
        skill:"TailwindCss"
    },
    {
        logo:<SiMui/>,
        skill:"Material-UI"
    },
    {
        logo:<SiJunit5/>,
        skill:"Junit & Mockito"
    }

]

export const Tools:stringWithLink[]=[
    {
        logo:<FaGithub/>,
        skill:"Git, GitHub & BitBucket"
    },
    {
        logo:<FaJenkins/>,
        skill:"GitHub Actions & Jenkins"
    },
    {
        logo:<FaDocker/>,
        skill:"Docker"
    },
    {
        logo:<SiKubernetes/>,
        skill:"Kubernetes"
    },
    {
        logo:<BiLogoPostgresql/>,
        skill:"Postgresql"
    },
    {
        logo:<SiPostman/>,
        skill:"PostMan"
    },
    {
        logo:<SiAmazonec2 />,
        skill:"EC2 (AWS)"
    },
    {
        logo:<SiAwslambda/>,
        skill:"Lambda (AWS)"
    },
    {
        logo:<SiAmazonecs />,
        skill:"ECS & EKS (AWS)"
    }
]