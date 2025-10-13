import React from 'react';
import Div from '@elements/div';
import Text from '@elements/text';
import Wrapper from '@layouts/wrapper';

const MelatoninVsNightSymphony = () => {
  const comparisonData = [
    {
      factor: 'Form',
      melatonin: { status: 'ordinary', text: 'Synthetic or extracted supplement in pill form' },
      nightSymphony: { status: 'positive', text: 'Herbal tea blend for enjoyable sipping' },
    },
    {
      factor: 'Ingredients',
      melatonin: { status: 'ordinary', text: 'Hormone-based' },
      nightSymphony: { status: 'positive', text: 'Natural organics like Passionflower, Valerian Root, Lavender, Lemon Balm, Chamomile' },
    },
    {
      factor: 'Flavor Profile',
      melatonin: { status: 'ordinary', text: 'Tasteless (pill)' },
      nightSymphony: { status: 'ordinary', text: 'Gentle, floral and herbal notes for a calming cup' },
    },
    {
      factor: 'Preparation',
      melatonin: { status: 'ordinary', text: 'Swallow with water; no brewing' },
      nightSymphony: { status: 'ordinary', text: 'Simple steep; ritualistic and relaxing' },
    },
    {
      factor: 'Sustainability',
      melatonin: { status: 'ordinary', text: 'Varies; often lab-produced' },
      nightSymphony: { status: 'positive', text: '100% organic, sustainably sourced, plastic-free' },
    },
    {
      factor: 'Origin',
      melatonin: { status: 'ordinary', text: 'Manufactured' },
      nightSymphony: { status: 'positive', text: 'Canadian-sourced, hand-crafted' },
    },
    {
      factor: 'Potential Side Effects',
      melatonin: { status: 'warning', text: 'May include grogginess or interactions' },
      nightSymphony: { status: 'positive', text: 'Generally mild and well-tolerated' },
    },
    {
      factor: 'Long-term Use',
      melatonin: { status: 'warning', text: 'Tolerance may develop' },
      nightSymphony: { status: 'positive', text: 'Suitable for ongoing enjoyment' },
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
    <Wrapper className="flex-col md:pt-16 pt-8 items-center md:pb-16 pb-8 px-2">
      <Div className="flex-col items-center w-full justify-center md:gap-2 gap-1 mb-8">
        <Text color="primary" type="normal" typography={['xxs', 'xs']}>COMPARISON</Text>
        <Text type="bold" typography={['xl', 'xxl']}>Melatonin VS Night Symphony</Text>
        <Text align='center' color="grey.600" type="medium" typography={['sm', 'md']} className="mt-2">
          Experience better sleep naturally with Night Symphony&apos;s herbal blend
        </Text>
      </Div>

      <Div className="w-full max-w-6xl overflow-hidden rounded-2xl border border-grey-200 shadow-lg flex-col">
        {/* Table Header */}
        <Div className="bg-primary-500 text-white p-4 grid grid-cols-3 gap-4">
          <Text typography={['md', 'md']} type="bold" color="white">Factor</Text>
          <Text typography={['md', 'md']} type="bold" color="white">Melatonin</Text>
          <Text typography={['md', 'md']} type="bold" color="white">Night Symphony</Text>
        </Div>

        {/* Table Body */}
        <Div className="bg-white flex-col">
          {comparisonData.map((row, index) => (
            <Div key={index} className={`grid grid-cols-3 gap-4 p-4 ${index % 2 === 0 ? 'bg-white' : 'bg-grey-50'}`}>
              {/* Factor Column */}
              <Div className="flex items-start">
                <Text typography={['sm', 'sm']} type="bold" color="grey.800">
                  {row.factor}
                </Text>
              </Div>

              {/* Melatonin Column */}
              <Div className="flex items-start gap-2">
                {getStatusIcon(row.melatonin.status)}
                <Text typography={['sm', 'sm']} color={getStatusColor(row.melatonin.status)}>
                  {row.melatonin.text}
                </Text>
              </Div>

              {/* Night Symphony Column */}
              <Div className="flex items-start gap-2">
                {getStatusIcon(row.nightSymphony.status)}
                <Text typography={['sm', 'sm']} color={getStatusColor(row.nightSymphony.status)}>
                  {row.nightSymphony.text}
                </Text>
              </Div>
            </Div>
          ))}
        </Div>
      </Div>

    </Wrapper>
  );
};

export default MelatoninVsNightSymphony;

