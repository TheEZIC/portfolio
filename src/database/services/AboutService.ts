import {AboutModel} from ".."

export class AboutService {
  public async get() {
    const [aboutData] = await AboutModel.find();
    
    return aboutData;
  }
}