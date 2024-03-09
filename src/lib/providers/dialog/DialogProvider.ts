import { EnterprisesRepo } from '$lib/repositories/EnterprisesRepo';
import 'sweetalert2/dist/sweetalert2.css';
import Swal from 'sweetalert2/dist/sweetalert2.js';

export type DialogData = {
	iconType?: 'info' | 'success' | 'warning';
	title: string;
	text: string;
	cancelButtonText?: string;
	confirmButtonText?: string;
	confirmType?: 'primary' | 'danger';
	iconColor?: string;
	allowOutsideClick?: boolean;
}

export type HtmlDialogData = {
	title: string,
	html: string,
	icon?: IconType,
	confirmButtonText?: string,
	cancelButtonText?: string,
}

export type IconType = 'success' | 'error' | 'info' | 'quenstion' | 'warning'

export class DialogProvider {
	static show(data: DialogData): Promise<boolean> {
		// eslint-disable-next-line compat/compat
		return new Promise((resolve) => {
			Swal.fire({
				title: data.title,
				text: data.text,
				confirmButtonText: data.confirmButtonText ?? 'OK',
				confirmButtonColor: '#2B8262',
			}).then((userDecision: any) => {
				resolve(userDecision.isConfirmed);
			});
		});
	}

	static dialog(data: DialogData): Promise<boolean> {
		const confirmType = data.confirmType ?? 'primary';

		const samsungConfirmButtonStyling = 'rounded-[128px] px-[24px] py-[10px] mx-[48px] my-[16px] text-samsung-white font-medium text-samsung-14';
		// eslint-disable-next-line compat/compat
		return new Promise((resolve) => {
			Swal.fire({
				width: '48rem',
				background: '#F7F7F7',
				// color: '#fff',
				title: data.title,
				text: data.text,
				icon: data.iconType ?? 'success',
				color: '#000000',
				iconColor: data.iconColor ?? '#006BEA',
				buttonsStyling: false,
				showCancelButton: data.cancelButtonText !== undefined,
				cancelButtonText: data.cancelButtonText,
				confirmButtonText: data.confirmButtonText ?? 'OK',
				confirmButtonColor: '#2B8262',
				customClass: {
					confirmButton: confirmType === 'primary'
						? `${samsungConfirmButtonStyling} bg-samsung-sky-blue-darker`
						: `${samsungConfirmButtonStyling} bg-samsung-coral`,
					title: 'text-samsung-16 text-samsung-black font-medium',
					cancelButton: 'rounded-[128px] px-[24px] py-[10px] bg-transparent text-samsung-black font-medium text-samsung-14 border-samsung-black border-1',
				},
			}).then((userDecision: any) => {
				resolve(userDecision.isConfirmed);
			});
		});
	}

	static createEnterpriseModal(bearerToken: string) {
		Swal.fire({
			title: 'Digite o nome do novo tipo',
			input: 'text',
			inputAttributes: {
				autocapitalize: 'off',
			},
			showCancelButton: true,
			cancelButtonText: 'Voltar',
			confirmButtonText: 'Cadastrar',
			showLoaderOnConfirm: true,
			preConfirm: (name: string) => {
				return EnterprisesRepo.generate({ name, bearerToken });
			},
			allowOutsideClick: () => !Swal.isLoading(),
		}).then((result: any) => {
			console.log(result);
			if (result.isConfirmed) {
				const createEnterpriseStatus = result.value.status;
				if (createEnterpriseStatus === 'ENTERPRISE_ALREADY_EXISTS') {
					Swal.fire({
						icon: 'error',
						title: 'Oops...',
						text: 'Esse nome já existe, por favor tente outro.',
					});
				} else {
					Swal.fire({
						icon: 'success',
						title: 'Sucesso!',
						text: 'Registro efetuado com sucesso!',
					});
				}
			}
		});
	}

	static htmlModal(data: HtmlDialogData) {
		Swal.fire({
			title: `<strong>${data.title}</strong>`,
			icon: data.icon ?? 'info',
			html: data.html,
			showCancelButton: true,
			focusConfirm: false,
			confirmButtonText: data.confirmButtonText ?? 'Confirmar',
			cancelButtonText: data.cancelButtonText ?? 'Cancelar',
		});
	}

	static loadingModal() {
		Swal.showLoading();
	}
}
