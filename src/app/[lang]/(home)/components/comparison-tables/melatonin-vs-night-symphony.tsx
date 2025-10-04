import React from 'react';
import Div from '@elements/div';
import Text from '@elements/text';
import Wrapper from '@layouts/wrapper';

const MelatoninVsNightSymphony = () => {
  const comparisonData = [
    {
      factor: 'Sleep Aid',
      melatonin: { status: 'positive', text: 'Helps regulate circadian rhythm, supports faster sleep onset' },
      nightSymphony: { status: 'positive', text: 'Promotes deep, restful sleep with calming herbs (Passion Flower, Valerian, Chamomile, etc.)' },
    },
    {
      factor: 'Anxiety & Stress Reduction',
      melatonin: { status: 'negative', text: 'Minimal direct effect, mainly sleep-focused' },
      nightSymphony: { status: 'positive', text: 'Strong calming and anti-stress properties' },
    },
    {
      factor: 'Pain & Muscle Tension Relief',
      melatonin: { status: 'negative', text: 'Not significant' },
      nightSymphony: { status: 'positive', text: 'Mild muscle relaxant, eases menstrual pain and headaches' },
    },
    {
      factor: 'Anti-inflammatory Effects',
      melatonin: { status: 'negative', text: 'Limited' },
      nightSymphony: { status: 'positive', text: 'Chamomile and Lavender provide natural anti-inflammatory support' },
    },
    {
      factor: 'Immune System Support',
      melatonin: { status: 'negative', text: 'None' },
      nightSymphony: { status: 'positive', text: 'Herbal ingredients support immune health' },
    },
    {
      factor: 'Digestive Support',
      melatonin: { status: 'negative', text: 'None' },
      nightSymphony: { status: 'positive', text: 'Lemon Balm and Chamomile aid digestion' },
    },
    {
      factor: 'Risk of Dependence',
      melatonin: { status: 'negative', text: 'Not addictive, but tolerance may develop with prolonged use' },
      nightSymphony: { status: 'negative', text: 'No risk of dependence' },
    },
    {
      factor: 'Side Effects',
      melatonin: { status: 'warning', text: 'Possible headaches, dizziness, next-day grogginess, vivid dreams, drug interactions' },
      nightSymphony: { status: 'positive', text: 'Very minimal, generally well tolerated' },
    },
    {
      factor: 'Long-term Safety',
      melatonin: { status: 'warning', text: 'Long-term safety not fully established' },
      nightSymphony: { status: 'positive', text: 'Safe for long-term use due to natural herbal composition' },
    },
    {
      factor: 'Natural Origin',
      melatonin: { status: 'negative', text: 'Synthetic or extracted hormone' },
      nightSymphony: { status: 'positive', text: '100% plant-based, natural' },
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
        <Text type="bold" typography={['xl', 'xxl']}>Melatonin VS Night Symphony</Text>
        <Text color="grey.600" type="medium" typography={['sm', 'md']} className="mt-2">
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

