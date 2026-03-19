export const getRandomTaskSet = (taskGroups) => {
    return taskGroups.map((group) => {
      const variants = group.variants || [];
      const randomIndex = Math.floor(Math.random() * variants.length);
      const selectedVariant = variants[randomIndex];
  
      return {
        id: group.id,
        ...selectedVariant,
      };
    });
};