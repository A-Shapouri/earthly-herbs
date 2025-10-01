import React from 'react';
import Div from '@elements/div';
import Text from '@elements/text';
import Wrapper from '@layouts/wrapper';

const CoffeeVsDaySymphony = () => {
    const comparisonData = [
        {
            factor: 'Energy Boost',
            coffee: { status: 'positive', text: 'Strong energy boost due to caffeine' },
            daySymphony: { status: 'positive', text: 'Gentle energy boost from Yerba Mate Green' }
        },
        {
            factor: 'Mental Focus & Clarity',
            coffee: { status: 'positive', text: 'Improves alertness and concentration' },
            daySymphony: { status: 'positive', text: 'Enhances mental focus and clarity naturally' }
        },
        {
            factor: 'Stress Reduction',
            coffee: { status: 'negative', text: 'Can increase stress hormones (cortisol)' },
            daySymphony: { status: 'positive', text: 'Contains Spearmint & Honeybush for stress relief' }
        },
        {
            factor: 'Digestive Support',
            coffee: { status: 'negative', text: 'May irritate stomach and cause acid reflux' },
            daySymphony: { status: 'positive', text: 'Honeybush and Chamomile aid digestion' }
        },
        {
            factor: 'Antioxidant Properties',
            coffee: { status: 'positive', text: 'Contains antioxidants (polyphenols)' },
            daySymphony: { status: 'positive', text: 'Rich in antioxidants, supports overall health' }
        },
        {
            factor: 'Weight Management',
            coffee: { status: 'positive', text: 'Boosts metabolism, supports weight loss' },
            daySymphony: { status: 'positive', text: 'Yerba Mate supports metabolism and weight management' }
        },
        {
            factor: 'Hormonal Balance',
            coffee: { status: 'negative', text: 'No hormonal balance benefits' },
            daySymphony: { status: 'positive', text: 'Spearmint supports hormonal balance' }
        },
        {
            factor: 'Blood Sugar Regulation',
            coffee: { status: 'negative', text: 'Can impair blood sugar regulation in sensitive individuals' },
            daySymphony: { status: 'positive', text: 'Honeybush helps regulate blood sugar' }
        },
        {
            factor: 'Skin Health Improvement',
            coffee: { status: 'negative', text: 'No skin health benefits, may worsen acne in some' },
            daySymphony: { status: 'positive', text: 'Herbal blend supports healthy skin' }
        },
        {
            factor: 'Sleep Disruption Risk',
            coffee: { status: 'warning', text: 'High risk of sleep disruption, especially if consumed late' },
            daySymphony: { status: 'negative', text: 'Very low risk, contains mild caffeine from Yerba Mate but gentler than coffee' }
        },
        {
            factor: 'Addiction / Dependence Risk',
            coffee: { status: 'warning', text: 'Risk of dependence due to caffeine; withdrawal symptoms common' },
            daySymphony: { status: 'negative', text: 'No dependence risk' }
        },
        {
            factor: 'Nervousness / Anxiety Risk',
            coffee: { status: 'warning', text: 'Can cause jitteriness, restlessness, and anxiety' },
            daySymphony: { status: 'negative', text: 'Unlikely to cause anxiety or nervousness' }
        },
        {
            factor: 'Long-term Safety',
            coffee: { status: 'warning', text: 'Safe in moderation but overuse linked to heart issues, high BP, sleep disorders' },
            daySymphony: { status: 'positive', text: 'Safe for long-term use due to herbal blend' }
        },
        {
            factor: 'Natural Origin',
            coffee: { status: 'negative', text: 'Processed, roasted beans; natural but stimulating compound (caffeine)' },
            daySymphony: { status: 'positive', text: '100% plant-based, natural ingredients' }
        }
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
                return 'grey';
        }
    };

    return (
        <Wrapper className="flex-col md:pt-16 pt-8 items-center md:pb-16 pb-8">
            <Div className="flex-col items-center w-full justify-center md:gap-2 gap-1 mb-8">
                <Text color="primary" type="normal" typography={['xxs', 'xs']}>COMPARISON</Text>
                <Text type="bold" typography={['xl', 'xxl']}>Coffee VS Day Symphony</Text>
                <Text color="grey.600" type="medium" typography={['sm', 'md']} className="text-center max-w-2xl mt-2">
                    Discover why Day Symphony is the superior choice for your daily energy needs
                </Text>
            </Div>

            <Div className="w-full max-w-6xl overflow-hidden rounded-2xl border border-grey-200 shadow-lg">
                {/* Table Header */}
                <Div className="bg-primary-500 text-white p-4 grid grid-cols-3 gap-4">
                    <Text typography={['md', 'md']} type="bold" color="white">Factor</Text>
                    <Text typography={['md', 'md']} type="bold" color="white">Coffee</Text>
                    <Text typography={['md', 'md']} type="bold" color="white">Day Symphony</Text>
                </Div>

                {/* Table Body */}
                <Div className="bg-white">
                    {comparisonData.map((row, index) => (
                        <Div key={index} className={`grid grid-cols-3 gap-4 p-4 ${index % 2 === 0 ? 'bg-white' : 'bg-grey-50'}`}>
                            {/* Factor Column */}
                            <Div className="flex items-start">
                                <Text typography={['sm', 'sm']} type="bold" color="grey.800">
                                    {row.factor}
                                </Text>
                            </Div>

                            {/* Coffee Column */}
                            <Div className="flex items-start gap-2">
                                {getStatusIcon(row.coffee.status)}
                                <Text typography={['sm', 'sm']} color={getStatusColor(row.coffee.status)}>
                                    {row.coffee.text}
                                </Text>
                            </Div>

                            {/* Day Symphony Column */}
                            <Div className="flex items-start gap-2">
                                {getStatusIcon(row.daySymphony.status)}
                                <Text typography={['sm', 'sm']} color={getStatusColor(row.daySymphony.status)}>
                                    {row.daySymphony.text}
                                </Text>
                            </Div>
                        </Div>
                    ))}
                </Div>
            </Div>

            {/* Summary */}
            <Div className="mt-8 p-6 bg-gradient-to-r from-primary-50 to-success-50 rounded-xl border border-primary-200">
                <Text typography={['md', 'md']} type="bold" color="primary" className="mb-2">
                    Why Choose Day Symphony?
                </Text>
                <Text typography={['sm', 'sm']} color="grey.700">
                    Day Symphony provides all the benefits of coffee without the negative side effects.
                    Get sustained energy, improved focus, and wellness benefits from natural herbal ingredients.
                </Text>
            </Div>
        </Wrapper>
    );
};

export default CoffeeVsDaySymphony;

