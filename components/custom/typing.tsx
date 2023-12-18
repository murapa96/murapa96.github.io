'use client';

import React, { Component } from 'react';
import './typing.css';

interface TypingProps {
    strings: string[];
    delay?: number;
    loop?: boolean;
}

interface TypingState {
    currentString: string;
    isDeleting: boolean;
}

class Typing extends Component<TypingProps, TypingState> {
    static defaultProps = {
        delay: 2000,
        loop: false,
    };

    state: TypingState = {
        currentString: '',
        isDeleting: false,
    };

    private currentArrayIndex = 0;
    private typingInterval: NodeJS.Timeout | null = null;

    componentDidMount() {
        this.typingInterval = setInterval(this.typingEffect, 100);
    }

    componentWillUnmount() {
        if (this.typingInterval) {
            clearInterval(this.typingInterval);
        }
    }

    typingEffect = () => {
        const { strings, loop, delay } = this.props;
        let { currentString, isDeleting } = this.state;

        if (isDeleting) {
            currentString = currentString.slice(0, -1);
        } else {
            currentString += strings[this.currentArrayIndex].charAt(currentString.length);
        }

        if (!isDeleting && currentString === strings[this.currentArrayIndex]) {
            if (this.currentArrayIndex === strings.length - 1 && !loop) {
                clearInterval(this.typingInterval); // Stop if it's the last string and no loop
                return;
            }
            setTimeout(() => this.setState({ isDeleting: true }), delay);
        } else if (isDeleting && currentString === '') {
            this.currentArrayIndex = (this.currentArrayIndex + 1) % strings.length;
            if (!loop && this.currentArrayIndex === 0) {
                clearInterval(this.typingInterval); // Stop if we've gone through all strings and no loop
                return;
            }
            this.setState({ isDeleting: false });
        }

        this.setState({ currentString });
    };

    render() {
        return (
            <span className="inline-block typing-effect text-4xl font-bold">
                <span className="transition-all duration-200">
                    {this.state.currentString}
                </span>
                <span className="typing-cursor">|</span>
            </span>
        );
    }
}

export default Typing;
