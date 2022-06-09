/*
 * @Author: 王荣
 * @Date: 2022-06-09 15:19:59
 * @LastEditors: 王荣
 * @LastEditTime: 2022-06-09 15:20:30
 * @Description: 填写简介
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Truncate from 'react-truncate';

//static
import './index.scss'


interface IReadMoreProps {
    more: string,
    less: string,
    lines: number
}

interface IReadMoreStates{
    expanded: boolean,
    truncated: boolean
}


class ReadMore extends Component<IReadMoreProps,IReadMoreStates> {
    constructor(props:IReadMoreProps) {
        super(props);

        this.state = {
            expanded: false,
            truncated: false
        };

        this.handleTruncate = this.handleTruncate.bind(this);
        this.toggleLines = this.toggleLines.bind(this);
    }

    handleTruncate(truncated) {
        if (this.state.truncated !== truncated) {
            this.setState({
                truncated
            });
        }
    }

    toggleLines(event) {
        event.preventDefault();

        this.setState({
            expanded: !this.state.expanded
        });
    }

    render() {
        const {
            children,
            more,
            less,
            lines
        } = this.props;

        const {
            expanded,
            truncated
        } = this.state;

        return (
            <div>
                <Truncate
                    lines={!expanded && lines}
                    ellipsis={(
                        <span>... <span className="truncated-label-text" onClick={this.toggleLines}>{more}</span></span>
                    )}
                    onTruncate={this.handleTruncate}
                >
                    {children}
                </Truncate>
                {!truncated && expanded && (
                    <span> <span 
                    className="truncated-label-text"
                    onClick={this.toggleLines}>{less}</span></span>
                )}
            </div>
        );
    }
}


export default ReadMore;


//css代码index.scss

// .truncated-label-text {
//     cursor: pointer;
//     color: #415bf2;
//     &: hover {
//         color: #FF7942;
//     }
// }




