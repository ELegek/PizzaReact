import React from 'react';
import classNames from 'classnames';

function Button({ onClick, className, outline, children }) {
	return (
		<button
			onclick={onClick}
			className={classNames('button', className, {
				'button--outline': outline,
			})}>
			{children}
		</button>
	);
}

export default Button;
