import { BaseParser, Parser } from './base';

// enum DICTIONARY {
//   ITEM_CHAR = '[',
//   OBJECT_CHAR = '<',

//   STEP_ID = 0,
//   VERB_TEXT = 1,
//   RACE = 2,
//   CLASS = 3,
//   INTERNAL_QUEST_ID = 5,
//   DIRECT_OBJ_ID = 6,
//   DIRECT_OBJ_AMOUNT = 7,
//   DIRECT_OBJ_TEXT = 8,
//   INDIRECT_OBJ_TEXT = 9,
//   INDIRECT_OBJ_ID = 10,
//   COORDS = 12,
//   ZONE = 13,
//   XP = 14,
//   REQUIRES_TEXT = 15,
//   TIP_TEXT = 16
// }

export class WowClassicLiveParser extends BaseParser implements Parser {
  parse(file?) {
    const data = super.parse(file);
    return this.getTasks(data);
  }

  private enumerable(data) {
    const list = Object.keys(data).map(i => {
      if (typeof data[i] === 'object') {
        return this.enumerable(data[i]);
      }
      return data[i];
    })

    return list;
  }

  getTasks(data: {}) {
    const tasks = this.enumerable(data);
    console.log (tasks[1]);
    return tasks;
  }
}
