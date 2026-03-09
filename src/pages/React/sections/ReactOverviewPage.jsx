import { InfoBlock, ContentRenderer } from "@/shared/content";
import  reactIntroSections  from "@/pages/React/data/reactIntro.data";

const ReactOverviewPage = () => {
  return (
    <div>
      <h1>Overview</h1>

      {reactIntroSections.map((section) => (
        <InfoBlock key={section.id} title={section.title}>
          <ContentRenderer blocks={section.blocks} />
        </InfoBlock>
      ))}
    </div>
  );
};

export default ReactOverviewPage;