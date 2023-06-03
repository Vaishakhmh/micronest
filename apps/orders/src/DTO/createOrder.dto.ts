import {
  IsString,
  IsNotEmpty,
  IsCurrency,
  IsMobilePhone,
} from 'class-validator';

export class CreatOrder {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsCurrency({ allow_decimal: true })
  price: number;

  @IsMobilePhone()
  phoneNumber: string;
}
