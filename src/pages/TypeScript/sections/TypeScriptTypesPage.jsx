import { InfoBlock, ContentRenderer } from "@/shared/content";
import { typeScriptTypesSections } from "../data/typeScriptTypes.data";
import { PageToc } from "@/shared/ui";

const TypeScriptTypesPage = () => {

    return (
        <div>
            <h1>Types</h1>

            <PageToc items={typeScriptTypesSections.map(({ id, title }) => ({ id, title }))} />


            {typeScriptTypesSections.map((section) => (
                <InfoBlock key={section.id} id={section.id} title={section.title}>
                    <ContentRenderer blocks={section.blocks} />
                </InfoBlock>
            ))}
        </div>
    )
}

export default TypeScriptTypesPage;