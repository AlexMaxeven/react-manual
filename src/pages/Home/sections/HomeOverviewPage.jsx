import { InfoBlock, ContentRenderer } from "@/shared/content";
import { reactHomeSections } from "../data/reactHome.data";

const HomeOverviewPage = () => {
  return (
    <div>
      <h1>React Manual</h1>

      {reactHomeSections.map((section) => (
        <InfoBlock key={section.id} title={section.title}>
          <ContentRenderer blocks={section.blocks} />
        </InfoBlock>
      ))}
    </div>
  );
};

export default HomeOverviewPage;