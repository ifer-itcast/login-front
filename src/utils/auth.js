import React from 'react';
import { connect } from 'react-redux';
import { addFlashAc } from '../../src/pages/flash/store/actionCreators';
import shortid from 'shortid';

export default function(Comp) {
    class Auth extends React.Component {
        componentWillMount() {
            // 如果没有登录，就跳转到登录页
            if(this.props.isAuth === false) {
                this.props.addFlashAc({
                    id: shortid.generate(),
                    type: 'alert-primary',
                    text: '请登录'
                });
                this.props.history.push('/login');
            }
        }
        componentWillUpdate(nextProps) {
            if(!nextProps.isAuth && nextProps.isAuth !== this.props.isAuth) {
                this.props.history.push('/login');
            }
        }
        render() {
            return <Comp {...this.props}/>;
        }
    }
    const mapStateToProps = state => {
        return {
            isAuth: state.login.isAuth
        };
    };
    return connect(mapStateToProps, { addFlashAc })(Auth);
};