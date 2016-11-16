// type: 1 主动效果
// type: 2 被动效果

const STATE_TABLE = [
  {
    id: 2000001,
    name: '中毒',
    type: '1',
    logo: '毒',
    color: 'black',
    dsc : '你中毒了,每回合将会减少HP!',
    label : ['测试','状态'],
    event: function(action, attacker ,enemy){
      action.change('attacker_changeHp', -10);
    },
  },
  {
    id: 2000002,
    name: '坚盾',
    type: '2',
    logo: '盾',
    color: 'red',
    dsc : '坚守之盾,免疫50%伤害',
    label : ['测试','状态'],
    event: function(action, attacker ,enemy){
      if(action.enemy_changeHp){
        action.change('enemy_changeHp', parseInt(action.enemy_changeHp * 0.5), true);
      }
    },
  }
]

export default STATE_TABLE