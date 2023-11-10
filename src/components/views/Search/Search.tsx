import {useEffect, useState} from "react";
import {useForm} from "react-hook-form";

import {IGetAddressData, useGetAddressMutation} from "@store/api/searchApi";
import Button from "@components/Button/Button";
import {PreLoader} from "@components/PreLoader/PreLoader";
import SearchIcon from "@assets/icon/SearchWhiteIcon.svg";

import styles from "./Search.module.css";

const Search = () => {
    const [getAddress, {data, isLoading, isSuccess, isError, error}] = useGetAddressMutation();
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm<{search: string}>();
    const [dataAddresses, setDataAddresses] = useState<IGetAddressData["suggestions"]>([]);

    useEffect(() => {
        if (isSuccess && data?.suggestions) {
            setDataAddresses(data?.suggestions);
        }
    }, [isSuccess, data]);

    useEffect(() => {
        if (isError) {
            console.error(error);
        }
    }, [isError, error]);

    const onSubmit = (value: {search: string}) => {
        const {search} = {...value};
        if (!search || search.length <= 2) {
            return setDataAddresses([]);
        }
        getAddress({query: search, count: 20});
    };

    return (
        <div className={styles.wrapper}>
            {isLoading && <PreLoader />}
            <div className={styles.wrapperContent}>
                <div className={styles.header}>Поиск адресов</div>
                <div className={styles.title}>Введите интересующий вас адрес</div>
                <div className={styles.content}>
                    <form className={styles.searchBlock} onSubmit={handleSubmit(onSubmit)}>
                        <input
                            {...register("search", {minLength: 3})}
                            placeholder="Введите интересующий вас адрес"
                            className={styles.input}
                            type="text"
                            autoComplete="off"
                        />

                        <Button value="Поиск" Icon={SearchIcon} fontSizeValue="26px" />
                    </form>
                    {errors.search && errors.search.type === "minLength" && (
                        <span className={styles.error}>
                            Для выполнения поиска адреса необходимо ввести минимум 3 символа
                        </span>
                    )}
                </div>
                {isSuccess && dataAddresses.length > 0 && (
                    <div className={styles.addresses}>
                        <div className={styles.addressHeader}>Адреса</div>
                        {dataAddresses.map(address => (
                            <div key={address.value} className={styles.address}>
                                {address.value}
                            </div>
                        ))}
                    </div>
                )}
                {isSuccess && dataAddresses.length === 0 && (
                    <div className={styles.addresses}>
                        По вашему запросу не найдено адреса, попробуйте ввести другой адрес
                    </div>
                )}
                {isError && (
                    <div className={styles.error}>
                        При выполнении запроса произошла ошибка, подробности в консоли
                    </div>
                )}
            </div>
        </div>
    );
};

export default Search;
