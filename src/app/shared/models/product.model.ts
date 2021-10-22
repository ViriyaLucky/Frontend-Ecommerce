export class Product {
    Id:string = '';
    ProductName: string='';
    Description: string='';
    Price: number=0;
    Image_Path: string='';
    Quantity: number=0;
    Category: string='';
    Created_Date: string='';
    Modified_Date: string='';
    IsActive: boolean=false;

    deserialize(input: any) {
        Object.assign(this, input);
        return this;
      }
}
