import Link from "next/link";
import "./styles.css";

const NavigatorPages = () => {
  type LinkType = {
    name: string;
    link: string;
  };

  const enlaces: LinkType[] = [
    { name: "Inicio", link: "/" },
  ];

  return (
    <div className="NavigatorContainer">
      {enlaces.map((e) => (
        <Link className="NavigatorLink" key={e.link} href={e.link}>
          {e.name}
        </Link>
      ))}
    </div>
  );
};

export default NavigatorPages;
