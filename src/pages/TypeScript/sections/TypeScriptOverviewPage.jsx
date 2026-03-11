import { InfoBlock, ContentRenderer } from "@/shared/content";
import { typeScriptSections } from "../data/typeScript.data";
import { PageToc } from "@/shared/ui";

const TypeScriptOverviewPage = () => {
  return (
    <div>
      <h1>Overview</h1>

      <PageToc items={typeScriptSections.map(({ id, title }) => ({ id, title }))} />

      {typeScriptSections.map((section) => (
        <InfoBlock key={section.id} id={section.id} title={section.title}>
          <ContentRenderer blocks={section.blocks} />
        </InfoBlock>
      ))}
    </div>
  );
};

export default TypeScriptOverviewPage;