const generateDummyData = (moduleName) => {
    const data = [];
    for (let i = 0; i < 10; i++) {
      data.push({
        name: `${moduleName} ${i}`,
        id: Math.floor(Math.random() * 1000000),
        date: new Date().toISOString().slice(0, 10),
        income: Math.floor(Math.random() * 1000000),
        status: moduleName,
      });
    }
    return data;
  };
  
  export const cancelledData = generateDummyData('Cancelled');
  export const completedData = generateDummyData('Completed');
  export const packingData = generateDummyData('Packing');
  export const allData = [...cancelledData, ...completedData, ...packingData];