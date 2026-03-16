import { InfoBlock, ContentRenderer } from "@/shared/content";
import  reactIntroSections  from "@/pages/React/data/reactIntro.data";
import { PageToc } from "@/shared/ui";

const ReactOverviewPage = () => {
  return (
    <div>
      <h1>Overview</h1>

      <PageToc items={reactIntroSections.map(({ id, title }) => ({ id, title }))} />

      {reactIntroSections.map((section) => (
        <section key={section.id} id={section.id}>
          <InfoBlock title={section.title}>
            <ContentRenderer blocks={section.blocks} />
          </InfoBlock>
        </section>
      ))}
      
    </div>
    
  );
};

export default ReactOverviewPage;