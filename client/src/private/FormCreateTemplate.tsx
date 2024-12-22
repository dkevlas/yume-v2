import { FieldSetComp, FormComp, InputComp, TextareaComp } from "./components/CompToForm";

export default function FormCreateTemplate(){

    return (
        <FormComp>
            <InputComp 
                label="Título"
                name="title"
                type="text"
            />
            <TextareaComp 
                label="Descripción"
                name="description"
            />
            <InputComp 
                label="Precio"
                name="price"
                type="number"
            />
            <InputComp 
                label="Imagen Principal"
                name="thumbnail"
                type="text"
            />
            <FieldSetComp
                label="URL´s Imágenes"
                name="images"
            >
                <InputComp name="text" type="text" />
            </FieldSetComp>
        </FormComp>
    )
}