export type Promotion = {
    id: string;
    name: string;
    startDate: Date;
    endDate: Date;
    discountType: 'percentage' | 'fixed' | 'usage';
    discountValue: number;
    applicablePlans: string[];
    description: string;
    badge?: string;
  };
  
  export const currentPromotions: Promotion[] = [
    {
      id: 'black-friday-2023',
      name: 'Black Friday Special',
      startDate: new Date('2023-11-24'),
      endDate: new Date('2023-11-27'),
      discountType: 'percentage',
      discountValue: 20,
      applicablePlans: ['Basic', 'Pro', 'Business'],
      description: '20% off all plans',
      badge: '🎁 Black Friday'
    },
    {
      id: 'holiday-2023',
      name: 'Holiday Special',
      startDate: new Date('2023-12-20'),
      endDate: new Date('2023-12-31'),
      discountType: 'usage',
      discountValue: 0.05,
      applicablePlans: ['Pro', 'Business'],
      description: 'Special holiday rates',
      badge: '🎄 Holiday Offer'
    },
    {
      id: 'new-year-2024',
      name: 'New Year Special',
      startDate: new Date('2024-01-01'),
      endDate: new Date('2024-01-07'),
      discountType: 'percentage',
      discountValue: 24, // 24% off for 2024
      applicablePlans: ['Pro', 'Business'],
      description: 'Start 2024 with 24% off Pro & Business plans',
      badge: '🎉 New Year'
    }
  ];