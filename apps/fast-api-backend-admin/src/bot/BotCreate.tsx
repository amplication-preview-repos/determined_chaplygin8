import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { ServerTitle } from "../server/ServerTitle";

export const BotCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="name" source="name" />
        <TextInput label="description" multiline source="description" />
        <ReferenceInput source="server.id" reference="Server" label="Server">
          <SelectInput optionText={ServerTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
