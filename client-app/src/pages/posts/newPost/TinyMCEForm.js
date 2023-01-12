import { Field } from "formik";
import { Editor } from "@tinymce/tinymce-react";

const TinyMCEForm = (props) => {
  const { label, name, ...rest } = props;

  return (
    <>
      <label htmlFor={name}>{label}</label>
      <Field id={name} name={name} {...rest}>
        {({ form, field }) => {
          const { setFieldValue } = form;

          return (
            <>
              <Editor
                value={field.value}
                init={{
                  height: 200,
                  menubar: true,
                  plugins: [
                    // "advlist autolink lists link image charmap print preview anchor",
                    // "searchreplace visualblocks code fullscreen",
                    // "insertdatetime media table paste code help wordcount"
                  ],
                  toolbar:
                    "undo redo | formatselect | " +
                    "bold italic backcolor | alignleft aligncenter " +
                    "alignright alignjustify | bullist numlist outdent indent | " +
                    "removeformat | help",
                    toolbar_mode: 'sliding',
                  content_style:
                    "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }"
                }}
                onEditorChange={(content, editor) => {
                  setFieldValue(name, content);
                }}
              />
            </>
          );
        }}
      </Field>
    </>
  );
};

export default TinyMCEForm;
