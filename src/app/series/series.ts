export class Series {
constructor(private idA: number, private nameA: string, private channelA: string, private seasonA:number,
  private descripcionA:string, private webpageA:string, private posterA:string){}


  get id(): number {return this.idA;}
  get name(): string {return this.nameA;}
  get channel(): string {return this.channelA;}
  get season(): number {return this.seasonA;}
  get descripcion(): string {return this.descripcionA;}
  get webpage(): string {return this.webpageA;}
  get poster(): string {return this.posterA;}

}
