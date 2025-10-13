import React from 'react';
import Div from '@elements/div';
import Text from '@elements/text';
import Wrapper from '@layouts/wrapper';

const CoffeeVsDaySymphony = () => {
  const comparisonData = [
    {
      factor: 'Caffeine Content',
      coffee: { status: 'positive', text: 'High caffeine from roasted beans' },
      daySymphony: { status: 'positive', text: 'Mild caffeine from Yerba Mate Green' },
    },
    {
      factor: 'Flavor Profile',
      coffee: { status: 'ordinary', text: 'Bold, bitter roast with acidic notes' },
      daySymphony: { status: 'ordinary', text: 'Refreshing, minty freshness from Spearmint & Honeybush' },
    },
    {
      factor: 'Preparation',
      coffee: { status: 'ordinary', text: 'Brewed hot; often requires equipment' },
      daySymphony: { status: 'ordinary', text: 'Simple steep in hot water; quick and easy' },
    },
    {
      factor: 'Sustainability',
      coffee: { status: 'ordinary', text: 'Varies; often mass-produced with environmental impact' },
      daySymphony: { status: 'positive', text: '100% organic, sustainably sourced, plastic-free packaging' },
    },
    {
      factor: 'Origin',
      coffee: { status: 'ordinary', text: 'Typically from global plantations' },
      daySymphony: { status: 'positive', text: 'Canadian-sourced, hand-crafted herbal blend' },
    },
    {
      factor: 'Potential for Jitters',
      coffee: { status: 'warning', text: 'May cause restlessness in some' },
      daySymphony: { status: 'negative', text: 'Gentler profile, less likely to unsettle' },
    },
    {
      factor: 'Addiction Risk',
      coffee: { status: 'warning', text: 'Potential for dependence' },
      daySymphony: { status: 'negative', text: 'No known dependence risk' },
    },
    {
      factor: 'Natural Composition',
      coffee: { status: 'negative', text: 'Processed with added stimulants' },
      daySymphony: { status: 'positive', text: 'Pure plant-based ingredients' },
    },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'positive':
        return <Text typography={['sm', 'sm']} color="success">✓</Text>;
      case 'negative':
        return <Text typography={['sm', 'sm']} color="danger">✗</Text>;
      case 'warning':
        return <Text typography={['sm', 'sm']} color="warning">▲</Text>;
      default:
        return null;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'positive':
        return 'success';
      case 'negative':
        return 'danger';
      case 'warning':
        return 'warning';
      default:
        return 'control';
    }
  };

  return (
    <Wrapper className="flex-col md:pt-16 pt-8 items-center md:pb-16 pb-8">
      <Div className="flex-col items-center w-full justify-center md:gap-2 gap-1 mb-8">
        <Text color="primary" type="normal" typography={['xxs', 'xs']}>COMPARISON</Text>
        <Text type="bold" typography={['xl', 'xxl']}>Coffee VS Day Symphony</Text>
        <Text align='center' color="grey.600" type="medium" typography={['sm', 'md']} className="mt-2">
          Discover why Day Symphony is the superior choice for your daily energy needs
        </Text>
      </Div>

      <Div className="w-full max-w-6xl flex-col overflow-hidden rounded-2xl border border-grey-200 shadow-lg">
        {/* Table Header */}
        <Div className="bg-primary-500 text-white p-4 grid grid-cols-3 gap-4">
          <Text typography={['md', 'md']} type="bold" color="white">Factor</Text>
          <Text typography={['md', 'md']} type="bold" color="white">Coffee</Text>
          <Text typography={['md', 'md']} type="bold" color="white">Day Symphony</Text>
        </Div>

        {/* Table Body */}
        <Div className="bg-white flex-col">
          {comparisonData.map((row, index) => (
            <Div key={index}
              className={`grid grid-cols-3 gap-4 p-4 ${index % 2 === 0 ? 'bg-white' : 'bg-grey-50'}`}>
              {/* Factor Column */}
              <Div className="flex items-start">
                <Text typography={['sm', 'sm']} type="bold" color="grey.800">
                  {row.factor}
                </Text>
              </Div>

              {/* Coffee Column */}
              <Div className="items-start gap-2">
                {getStatusIcon(row.coffee.status)}
                <Text typography={['sm', 'sm']} color={getStatusColor(row.coffee.status)}>
                  {row.coffee.text}
                </Text>
              </Div>

              {/* Day Symphony Column */}
              <Div className="items-start gap-2">
                {getStatusIcon(row.daySymphony.status)}
                <Text typography={['sm', 'sm']} color={getStatusColor(row.daySymphony.status)}>
                  {row.daySymphony.text}
                </Text>
              </Div>
            </Div>
          ))}
        </Div>
      </Div>
    </Wrapper>
  );
};

export default CoffeeVsDaySymphony;

