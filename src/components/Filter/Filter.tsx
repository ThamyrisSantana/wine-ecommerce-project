import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { Dispatch, ReactNode, SetStateAction } from "react";

import { Container, FilterTitle, FilterLabel } from "./styles";

interface FilterProps {
  filter: string;
  setFilter: Dispatch<SetStateAction<string>>;
}

const Filter = ({ filter, setFilter }: FilterProps): JSX.Element => {
  return (
    <Container>
      <FilterTitle>Refine sua busca</FilterTitle>
      <FormControl component="fieldset">
        <FilterLabel>Por preço</FilterLabel>
        <RadioGroup
          aria-label="price"
          defaultValue="0"
          name="radio-buttons-group"
          value={filter}
          onChange={(_, value) => setFilter(value)}
        >
          <FormControlLabel value="0-40" control={<Radio />} label="Até 40" />
          <FormControlLabel value="40-60" control={<Radio />} label="40 A 60" />
          <FormControlLabel
            value="60-100"
            control={<Radio />}
            label="60 A 100"
          />
          <FormControlLabel
            value="100-200"
            control={<Radio />}
            label="100-200"
          />

          <FormControlLabel
            value="200-500"
            control={<Radio />}
            label="200 A 500"
          />
          <FormControlLabel
            value="500-10000"
            control={<Radio />}
            label="Acima de 500"
          />
        </RadioGroup>
      </FormControl>
    </Container>
  );
};

export default Filter;
