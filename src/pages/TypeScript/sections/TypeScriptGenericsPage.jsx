import { InfoBlock, ContentRenderer } from "@/shared/content";
import { typeScriptGenericsSections } from "../data/typeScriptGenerics.data";
import { PageToc } from "@/shared/ui";

const TypeScriptGenericsPage = () => {

    return (
        <div>
            <h1>Generics</h1>

            <PageToc items={typeScriptGenericsSections.map(({ id, title }) => ({ id, title }))} />

            {typeScriptGenericsSections.map((section) => (
                <InfoBlock key={section.id} id={section.id} title={section.title}>
                    <ContentRenderer blocks={section.blocks} />
                </InfoBlock>
            ))}
        </div>
    )
}

export default TypeScriptGenericsPage;