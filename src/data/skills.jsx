import {
    IoLogoJavascript
} from "react-icons/io5";
import {
    FaReact,
    FaAngular,
    FaCloud,
    FaJava,
    FaAws,
    FaDatabase
} from "react-icons/fa6";
import {
    SiTypescript,
    SiRedux,
    SiNextdotjs,
    SiBootstrap,
    SiTailwindcss,
    SiMaterialdesignicons,
    SiHtml5,
    SiCss3,
    SiNodedotjs,
    SiExpress,
    SiFastify,
    SiNestjs,
    SiSpring,
    SiPhp,
    SiLaravel,
    SiGraphql,
    SiSocketdotio,
    SiServerless,
    SiMysql,
    SiPostgresql,
    SiMongodb,
    SiNeo4J,
    SiRedis,
    SiApachekafka,
    SiRabbitmq,
    SiElasticsearch,
    SiKibana,
    SiPrisma,
    SiGooglecloud,
    SiDigitalocean,
    SiDocker,
    SiKubernetes,
    SiJenkins,
    SiGithubactions,
    SiSonarqube,
    SiJest,
    SiMocha,
    SiApachejmeter,
    SiPostman,
    SiSwagger,
    SiTwilio,
    SiSendgrid,
    SiStripe,
    SiRazorpay,
    SiJsonwebtokens,
    SiFirebase,
    SiOpenai,
    SiSolidity,
    SiEthereum,
    SiWeb3Dotjs,
    SiGit,
    SiGithub,
    SiGitlab,
    SiBitbucket,
    SiSubversion,
    SiJira,
    SiTrello,
    SiBackstage
} from "react-icons/si";
import {
    VscAzureDevops
} from "react-icons/vsc";
import {
    TbBrandOauth,
    TbBrandFirebase
} from "react-icons/tb";

const skills = {
    'Top Skills': [
        { title: "JavaScript", icon: <IoLogoJavascript className="text-[#F7DF1E]" />, category: "Frontend" },
        { title: "Node.js", icon: <SiNodedotjs className="text-[#339933]" />, category: "Backend & APIs" },
        { title: "React", icon: <FaReact className="text-[#61DAFB]" />, category: "Frontend" },
        { title: "Angular", icon: <FaAngular className="text-[#DD0031]" />, category: "Frontend" },
        { title: "MySQL", icon: <SiMysql className="text-[#4479A1]" />, category: "Databases & Streaming" },
        { title: "MongoDB", icon: <SiMongodb className="text-[#47A248]" />, category: "Databases & Streaming" },
        { title: "Azure", icon: <VscAzureDevops className="text-[#0089D6]" />, category: "Cloud" },
        { title: "AWS", icon: <FaAws className="text-[#FF9900]" />, category: "Cloud" },
        { title: "GraphQL", icon: <SiGraphql className="text-[#E10098]" /> },
        { title: "Docker", icon: <SiDocker className="text-[#2496ED]" />, category: "Cloud & DevOps" },
        { title: "Git", icon: <SiGit className="text-[#F05032]" />, category: "Tools & Collaboration" },
        { title: "OpenAI", icon: <SiOpenai className="text-[#412991]" /> },
    ],
    "Backend & APIs": [
        { title: "Node.js", icon: <SiNodedotjs className="text-[#339933]" /> },
        { title: "Express.js", icon: <SiExpress className="text-black dark:text-white" /> },
        { title: "Fastify", icon: <SiFastify className="text-black dark:text-white" /> },
        { title: "NestJS", icon: <SiNestjs className="text-[#E0234E]" /> },
        { title: "Java", icon: <FaJava className="text-[#00A3E0]" /> },
        { title: "Spring Boot", icon: <SiSpring className="text-[#6DB33F]" /> },
        { title: "PHP", icon: <SiPhp className="text-[#777BB4]" /> },
        { title: "Laravel", icon: <SiLaravel className="text-[#FF2D20]" /> },
        { title: "GraphQL", icon: <SiGraphql className="text-[#E10098]" /> },
        { title: "WebSockets", icon: <SiSocketdotio className="text-[#010101]" /> },
        { title: "REST APIs", icon: <FaCloud className="text-primary" /> },
        { title: "Serverless", icon: <SiServerless className="text-[#FD5750]" /> },
    ],
    "Frontend": [
        { title: "JavaScript", icon: <IoLogoJavascript className="text-[#F7DF1E]" /> },
        { title: "React", icon: <FaReact className="text-[#61DAFB]" /> },
        { title: "Angular", icon: <FaAngular className="text-[#DD0031]" /> },
        { title: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" /> },
        { title: "Redux", icon: <SiRedux className="text-[#764ABC]" /> },
        { title: "Next.js", icon: <SiNextdotjs className="text-black dark:text-white" /> },
        { title: "Bootstrap", icon: <SiBootstrap className="text-[#7952B3]" /> },
        { title: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
        { title: "Material UI", icon: <SiMaterialdesignicons className="text-[#0081CB]" /> },
        { title: "HTML5", icon: <SiHtml5 className="text-[#E34F26]" /> },
        { title: "CSS3", icon: <SiCss3 className="text-[#1572B6]" /> },
    ],
    "Databases & Streaming": [
        { title: "MySQL", icon: <SiMysql className="text-[#4479A1]" /> },
        { title: "PostgreSQL", icon: <SiPostgresql className="text-[#336791]" /> },
        { title: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
        { title: "CosmosDB", icon: <FaDatabase className="text-[#4F4F4F]" /> },
        { title: "Neo4j", icon: <SiNeo4J className="text-[#008CC1]" /> },
        { title: "Redis", icon: <SiRedis className="text-[#DC382D]" /> },
        { title: "Kafka", icon: <SiApachekafka className="text-black dark:text-white" /> },
        { title: "RabbitMQ", icon: <SiRabbitmq className="text-[#FF6600]" /> },
        { title: "ElasticSearch", icon: <SiElasticsearch className="text-[#005571]" /> },
        { title: "Kibana", icon: <SiKibana className="text-[#E8478B]" /> },
        { title: "Prisma ORM", icon: <SiPrisma className="text-black dark:text-white" /> },
    ],
    "Cloud & DevOps": [
        { title: "Azure", icon: <VscAzureDevops className="text-[#0089D6]" /> },
        { title: "AWS", icon: <FaAws className="text-[#FF9900]" /> },
        { title: "GCP", icon: <SiGooglecloud className="text-[#4285F4]" /> },
        { title: "DigitalOcean", icon: <SiDigitalocean className="text-[#0080FF]" /> },
        { title: "Docker", icon: <SiDocker className="text-[#2496ED]" /> },
        { title: "Kubernetes", icon: <SiKubernetes className="text-[#326CE5]" /> },
        { title: "Jenkins", icon: <SiJenkins className="text-[#D24939]" /> },
        { title: "GitHub Actions", icon: <SiGithubactions className="text-[#2088FF]" /> },
        { title: "SonarQube", icon: <SiSonarqube className="text-[#4E9BCD]" /> },
    ],
    "Testing & Monitoring": [
        { title: "Jest", icon: <SiJest className="text-[#C21325]" /> },
        { title: "Mocha", icon: <SiMocha className="text-[#8D6748]" /> },
        { title: "JMeter", icon: <SiApachejmeter className="text-[#D22128]" /> },
        { title: "Postman", icon: <SiPostman className="text-[#FF6C37]" /> },
        { title: "Swagger", icon: <SiSwagger className="text-[#85EA2D]" /> },
    ],
    "Messaging, Integration & Auth": [
        { title: "Twilio", icon: <SiTwilio className="text-[#F22F46]" /> },
        { title: "SendGrid", icon: <SiSendgrid className="text-[#0081C9]" /> },
        { title: "Stripe", icon: <SiStripe className="text-[#635BFF]" /> },
        { title: "Razorpay", icon: <SiRazorpay className="text-[#02042B]" /> },
        { title: "OAuth", icon: <TbBrandOauth className="text-[#3C5A99]" /> },
        { title: "JWT", icon: <SiJsonwebtokens className="text-[#000000]" /> },
        { title: "Firebase Auth", icon: <SiFirebase className="text-[#FFCA28]" /> },
    ],
    "AI, LLM & Web3": [
        { title: "OpenAI", icon: <SiOpenai className="text-[#412991]" /> },
        { title: "Solidity", icon: <SiSolidity className="text-[#363636]" /> },
        { title: "Ethereum", icon: <SiEthereum className="text-[#3C3C3D]" /> },
        { title: "Web3.js", icon: <SiWeb3Dotjs className="text-[#F16822]" /> },
    ],
    "Tools & Collaboration": [
        { title: "Git", icon: <SiGit className="text-[#F05032]" /> },
        { title: "GitHub", icon: <SiGithub className="text-black dark:text-white" /> },
        { title: "GitLab", icon: <SiGitlab className="text-[#FC6D26]" /> },
        { title: "Bitbucket", icon: <SiBitbucket className="text-[#0052CC]" /> },
        { title: "SVN", icon: <SiSubversion className="text-[#809CC9]" /> },
        { title: "Jira", icon: <SiJira className="text-[#0052CC]" /> },
        { title: "Trello", icon: <SiTrello className="text-[#0079BF]" /> },
        { title: "Azure Boards", icon: <VscAzureDevops className="text-[#0078D7]" /> },
        { title: "Back4App", icon: <SiBackstage className="text-[#FFB300]" /> },
        { title: "Firebase", icon: <TbBrandFirebase className="text-[#FFCA28]" /> },
    ],
};

export default skills;