import classes from '../helpers/classnames';
import React, { ReactFragment } from 'react';
import Input from '../input/input';
import './form.scss';

export interface FormValue { [K: string]: any };

interface Props {
    value: FormValue;
    fields: Array<{ name: string, label: string, input: { type: string } }>
    buttons: ReactFragment
    onSubmit: React.FormEventHandler<HTMLFormElement>
    onChange: (value: FormValue) => void;
    errors: { [K: string]: string[] };
    errorsDisplayMode?: 'first' | 'all';
    transformError?: (message: string) => string
}

const Form: React.FunctionComponent<Props> = (props) => {
    const formData = props.value
    const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault()
        props.onSubmit(e)
    }
    const onInputChange = (name: string, e: React.ChangeEvent<HTMLInputElement>) => {
        const newFormValue = { ...formData, [name]: e.target.value }
        props.onChange(newFormValue)
    }
    const transformError = (message: string) => {
        const map: any = {
            required: '必填',
            minLength: '太短了',
            maxLength: '太长了'
        }
        return props.transformError && props.transformError(message) || map[message] || '未知错误'
    }
    return (
        <form onSubmit={onSubmit}>
            <table className='fui-form-table'>
                <tbody>
                    {props.fields.map(f =>
                        <tr className={classes('fui-form-tr')} key={f.name}>
                            <td className='fui-form-td'>
                                <span className='fui-form-label'>{f.label}</span>
                            </td>
                            <td className='fui-form-td'>
                                <Input
                                    className='fui-form-input'
                                    type={f.input.type}
                                    value={formData[f.name]}
                                    onChange={onInputChange.bind(null, f.name)} />
                                <div className='fui-form-error'>
                                    {props.errors[f.name] ?
                                        (props.errorsDisplayMode === 'first' ?
                                            transformError!(props.errors[f.name][0]) :
                                            props.errors[f.name].map(transformError!).join(',')) :
                                        <span>&nbsp;</span>}
                                </div>
                            </td>
                        </tr>
                    )}
                    <tr className={classes('fui-form-tr')}>
                        <td className='fui-form-td' />
                        <td className='fui-form-td'>
                            {props.buttons}
                        </td>
                    </tr>
                </tbody>
            </table>
        </form>
    )
}
Form.defaultProps = {
    errorsDisplayMode: 'first',
}

export default Form