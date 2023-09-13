/*
 * Reglas:
 * El final de cada nivel debe ser el inicio del siguiente
*/

const emojis = {
    '-': ' ',
    'O': '🚪',
    'X': "⬛",
    'Z': "🔲",
    "A": "⬜",
    "B":"💣",
    "J": "🚧",
    "V": "🔳",
    'I': '🎁',
    'PLAYER': '💀',
    'BOMB_COLLISION': '🔥',
    'GAME_OVER': '👎',
    'WIN': '🏆',
    'HEART': '❤️',
  };
  
  const maps = [];
  maps.push(`
    VVVVVVVVVV
    IX---AXXXV
    ---X-AXXXV
    JXXX-AXXXV
    -XXX-AXXXV
    -X---AXXXV
    ---AAAXXXV
    -XXXXXXXXV
    -XXXXXXXXV
    OVVVVVVVVV
  `);
  maps.push(`
    O--------V
    Z--XXXXX-V
    ZX----XX-V
    Z--XX--XBV
    Z-XXX--XXV
    Z-XXXX-XXV
    Z---XX--XV
    ZX-XXXX-XV
    ZX--J---XV
    ZZZZZZZIZV
    `);
    maps.push(`
    ZZZZZZZZZZ
    ZX--J---IZ
    ZX-X--X--Z
    ZX-X-XXX-Z
    ZX---X---Z
    ZX-XXX-XXZ
    ZX-----X-Z
    ZXXXV-VX-Z
    ZX------OZ
    ZZZZZZZZZZ
  `);

  maps.push(`
    V--------V
    V-ZXAXAZ-V
    V-X----X-V
    V-A-XZ-A-V
    V-X-AI-X-V
    V-A-XAXZ-V
    V-X------V
    V-ZXJXAXZV
    V-------OV
    VZZZZZZZZV
  `);
