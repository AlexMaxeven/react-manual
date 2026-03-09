import { InfoBlock, ContentRenderer } from "@/shared/content";
import { typeScriptTypesSections } from "../data/typeScriptTypes.data";

const TypeScriptTypesPage = () => {

    return (
        <div>
            <h1>Types</h1>

            {typeScriptTypesSections.map((section) => (
                <InfoBlock key={section.id} title={section.title}>
                    <ContentRenderer blocks={section.blocks} />
                </InfoBlock>
            ))}
        </div>
    )
}

export default TypeScriptTypesPage;