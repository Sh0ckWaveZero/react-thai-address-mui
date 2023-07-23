import data from './database/raw_database/raw_database-en'

const MapData = () => {
  // [
  //   {
  //     "district": "แคน",
  //     "amphoe": "วาปีปทุม",
  //     "province": "มหาสารคาม",
  //     "zipcode": "44120",
  //     "district_code": "440907",
  //     "amphoe_code": "4409",
  //     "province_code": "44",
  //     "district_en": "Khaen",
  //     "amphoe_en": "Wapi Pathum",
  //     "province_en": "Maha Sarakham"
  // },
  // {
  //     "district": "โคกสีทองหลาง",
  //     "amphoe": "วาปีปทุม",
  //     "province": "มหาสารคาม",
  //     "zipcode": "44120",
  //     "district_code": "440915",
  //     "amphoe_code": "4409",
  //     "province_code": "44",
  //     "district_en": "Khok Si Thonglang",
  //     "amphoe_en": "Wapi Pathum",
  //     "province_en": "Maha Sarakham"
  // },
  // ]

  // // ข้อมูลที่จะเอาไปใช้ โดย province_en ห้ามซ้ำกัน
  // [
  //   [
  //     'Maha Sarakham',
  //     [
  //       [
  //         'Wapi Pathum',
  //         [
  //           ['Khok Si Thonglang', [44120]],
  //           ['Khaen Si Thonglang', [44120]],
  //         ],
  //       ],
  //     ],
  //   ],
  // ]

  const result = data.reduce((acc: any[], cur) => {
    const provinceIndex = acc.findIndex((p) => p[0] === cur.province_en)
    if (provinceIndex === -1) {
      acc.push([cur.province_en, [[cur.amphoe_en, [[cur.district_en, [cur.zipcode]]]]]])
    } else {
      const amphoeIndex = (acc[provinceIndex][1] as any[]).findIndex((a: any) => a[0] === cur.amphoe_en)
      if (amphoeIndex === -1) {
        (acc[provinceIndex][1] as any[]).push([cur.amphoe_en, [[cur.district_en, [cur.zipcode]]]])
      } else {
        const districtIndex = (acc[provinceIndex][1][amphoeIndex][1] as any[]).findIndex((d) => d[0] === cur.district_en)
        if (districtIndex === -1) {
          (acc[provinceIndex][1][amphoeIndex][1] as any[]).push([cur.district_en, [cur.zipcode]])
        } else {
          (acc[provinceIndex][1][amphoeIndex][1][districtIndex][1] as any).push(cur.zipcode)
        }
      }
    }
    return acc
  }, [])

  console.log(result)

  return <div>mapData</div>
}

export default MapData
