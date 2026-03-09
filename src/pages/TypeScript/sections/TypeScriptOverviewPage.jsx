import { InfoBlock, ContentRenderer } from "@/shared/content";
import { typeScriptSections } from "../data/typeScript.data";

const TypeScriptOverviewPage = () => {
  return (
    <div>
      <h1>Overview</h1>

      {typeScriptSections.map((section) => (
        <InfoBlock key={section.id} title={section.title}>
          <ContentRenderer blocks={section.blocks} />
        </InfoBlock>
      ))}
    </div>
  );
};

export default TypeScriptOverviewPage;