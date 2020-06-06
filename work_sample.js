// DB: 接続情報テーブル、電話情報テーブル、ブロック情報テーブル...(6つ)

class ConnectViewController{
    doPost(){
        new ConnectViewService()
        
    }
}
class ConnectViewService{
    viewDataJson(){
        return new ViewData().createJson(new RouteData());
    }
}
class Device {
  constructor(deviceType, conectDevices) {
    this.deviceType = deviceType;
    this.conectDevices = conectDevices;
    //...
  }
  // getter & setter
}
class Block {
  constructor(blockName, blockNo) {
    this.blockName;
    this.blockNo;
    //...
  }
  // getter & setter
}
class RouteData {
  constructor() {
    this.devices = [];
    this.blocks = [];
    create();
  }
  // getter & setter
  create() {
    this.devices.push(new Device("devA", ["devB", "devC"]));
    this.devices.push(new Device("devB", ["devA", "devD"]));
    this.blocks.push(new Block("kantou", "1"));
    this.blocks.push(new Block("kansai", "2"));
  }
}
class ViewData {
  static create(routeData) {
    const result = {
      DATAS: [
        {
          DEVICES: viewDevices(routeData),
          LINES: viewLines(routeData),
          DATA_ID: 1,
        },
      ],
    };
    return result;
  }
  viewDevices(routeData) {
    let result = [];
    result.push({
      ID: routeData.devices[0].deviceType,
      X: 10,
      Y: 10,
      TEXT: routeData.blocks[0].blockName //...
    });
    result.push({
      ID: routeData.devices[0].deviceType,
      X: 20,
      Y: 20,
      TEXT: routeData.blocks[0].blockName //...
    });
  }
  viewLines() {
    let result = [];
    result.push({
      ID: 1,
      FROM_ID: routeData.devices[0].deviceType,
      TO_ID: routeData.devices[1].deviceType //...
    });
    result.push({
      ID: 2,
      FROM_ID: routeData.devices[1].deviceType,
      TO_ID: routeData.devices[2].deviceType //...
    });
    return result;
  }
}

//********************

//src/models
class RouteInfoRep{
    //表示するための情報を知ってる人
    routeInfoTableRow
    getViewDevices()
    getViewLines()
}
class ViewDevice{
    //
}
class ViewLine{
    //
}
//src/service
class ViewService{
    //viewDevices&viewLinesを形成してJSONを作る
}
