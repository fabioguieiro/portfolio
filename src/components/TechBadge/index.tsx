import {
  AWSIcon,
  AngularIcon,
  CSharpIcon,
  CssIcon,
  CypressIcon,
  DotNetIcon,
  GitIcon,
  HtmlIcon,
  JavascriptIcon,
  JestIcon,
  MongoIcon,
  MySqlIcon,
  NewRelicIcon,
  NextIcon,
  NodeIcon,
  PostgreIcon,
  PythonIcon,
  RabbitMQIcon,
  ReactIcon,
  ReduxIcon,
  StyledComponentsIcon,
  TailwindIcon,
  TizenIcon,
  TypescriptIcon,
  VueIcon,
  WebosIcon,
  XamarinIcon,
} from "@/components/icons/tech";

type TTechBadgeProps = {
  name: string;
};

export const TechBadge = ({ name }: TTechBadgeProps) => {
  const renderTechBadge = ({ name }: TTechBadgeProps) => {
    switch (name) {
      case "C#":
        return (
          <div className="mt-2">
            <CSharpIcon size={48} />
          </div>
        );
      case "CSS":
        return (
          <div className="mt-2">
            <CssIcon size={48} />
          </div>
        );
      case "HTML":
        return (
          <div className="mt-2">
            <HtmlIcon size={48} />
          </div>
        );
      case "Typescript":
        return (
          <div className="mt-2">
            <TypescriptIcon size={48} />
          </div>
        );
      case "Xamarin":
        return (
          <div className="mt-2">
            <XamarinIcon size={48} />
          </div>
        );
      case "GIT":
        return (
          <div className="mt-2">
            <GitIcon size={48} />
          </div>
        );
      case "ASP.NET":
        return (
          <div className="mt-2">
            <DotNetIcon size={48} />
          </div>
        );
      case "MySQL":
        return (
          <div className="mt-2">
            <MySqlIcon size={48} />
          </div>
        );
      case "Vue.js":
        return (
          <div className="mt-2">
            <VueIcon size={48} />
          </div>
        );
      case "Python":
        return (
          <div className="mt-2">
            <PythonIcon size={48} />
          </div>
        );
      case "Javascript":
        return (
          <div className="mt-2">
            <JavascriptIcon size={48} />
          </div>
        );
      case "Rabbit MQ":
        return (
          <div className="mt-2">
            <RabbitMQIcon size={48} />
          </div>
        );
      case "Angular":
        return (
          <div className="mt-2">
            <AngularIcon size={48} />
          </div>
        );
      case "React":
        return (
          <div className="mt-2">
            <ReactIcon size={48} />
          </div>
        );
      case "AWS":
        return (
          <div className="mt-2">
            <AWSIcon size={48} />
          </div>
        );
      case "Tailwind":
        return (
          <div className="mt-2">
            <TailwindIcon size={48} />
          </div>
        );
      case "Redux":
        return (
          <div className="mt-2">
            <ReduxIcon size={48} />
          </div>
        );
      case "Node.js":
        return (
          <div className="mt-0">
            <NodeIcon size={64} />
          </div>
        );
      case "Next.js":
        return (
          <div className="mt-2">
            <NextIcon size={48} />
          </div>
        );
      case "Styled Components":
        return (
          <div className="mt-2">
            <StyledComponentsIcon />
          </div>
        );
      case "React Native":
        return (
          <div className="mt-2">
            <ReactIcon size={48} />
          </div>
        );
      case "Jest":
        return (
          <div className="mt-2">
            <JestIcon size={48} />
          </div>
        );
      case "WebOS":
        return (
          <div className="mt-9">
            <WebosIcon size={48} />
          </div>
        );
      case "Tizen":
        return (
          <div className="mt-2">
            <TizenIcon width={42} />
          </div>
        );
      case "Postgre":
        return (
          <div className="mt-2">
            <PostgreIcon size={48} />
          </div>
        );
      case "New Relic":
        return (
          <div className="mt-2">
            <NewRelicIcon size={48} />
          </div>
        );
      case "Cypress":
        return (
          <div className="mt-2">
            <CypressIcon size={48} />
          </div>
        );
      case "MongoDB":
        return (
          <div className="mt-2">
            <MongoIcon size={48} />
          </div>
        );
      default:
        return null;
    }
  };
  const icon = renderTechBadge({ name });

  return (
    <div className="w-24 h-24 border-4 mb-2 border-outline bg-surface text-ink rounded-md flex flex-col items-center justify-between">
      {icon ? (
        <>
          {icon}
          <p className="text-xs text-center font-bold font-primary">{name}</p>
        </>
      ) : (
        <p className="h-full px-1 flex items-center text-center text-sm font-bold font-primary">
          {name}
        </p>
      )}
    </div>
  );
};
