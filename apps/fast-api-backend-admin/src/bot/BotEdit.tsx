import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { ServerTitle } from "../server/ServerTitle";

export const BotEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="name" source="name" />
        <TextInput label="description" multiline source="description" />
        <ReferenceInput source="server.id" reference="Server" label="Server">
          <SelectInput optionText={ServerTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
