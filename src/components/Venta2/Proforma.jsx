import React from 'react';
import { PDFViewer, Document, Page, Text, View, StyleSheet, Image, Font } from '@react-pdf/renderer';
//import styles from '@/recursos/js/Styles';
const ProformaPDF = ({ cliente, fecha, encargado, productos, complementos, precioTotal }) => {
    Font.register({ family: 'Roboto', src: "/icons/h/ariblk.ttf" });
    Font.register({ family: 'C1', src: "/icons/h/2.TTF" });
    const altura = productos.length === 1 ? false : `${productos.length - 1}0`
    const styles = StyleSheet.create({
        page: {
            padding: 30,
        },
        section: {
            margin: 2,
        },
        heading: {
            fontSize: 18,
            marginBottom: 10,
            fontWeight: 'bold',
            textAlign: 'center',
            fontFamily: 'Roboto'
        },
        heading2: {
            fontSize: 12,
            marginBottom: 10,
            fontWeight: 'bold',
            textAlign: 'right',
            fontFamily: 'Roboto'
        },
        heading3: {
            fontSize: 10,
            marginBottom: 0,
            fontWeight: 'bold',
            textAlign: 'center',
            textDecoration: 'underline'
        },
        subheading: {
            fontSize: 12,
            marginBottom: 10,
        },
        text: {
            fontSize: 10,
            marginBottom: 5,
        },
        text2: {
            fontSize: 8,
            margin: 2,
        },
        table: {
            display: 'table',
            width: 'auto',
            borderStyle: 'solid',
            borderWidth: 1,
            margin: 10,
        },
        tableRow: {
            flexDirection: 'row',
        },
        tableCol: {
            width: '25%',
            borderStyle: 'solid',
            borderWidth: 1,
            padding: 5,
        },
        tableCol2: {
            width: '50%',
            textAlign: 'center',
            borderStyle: 'solid',
            borderWidth: 1,
            padding: 1,
            textAlign: 'center'
        },
        tableCol3: {
            width: '100%',
            borderStyle: 'solid',
            borderWidth: 1,
            padding: 1,
            textAlign: 'center'
        },
        tableCell: {
            margin: 3,
            fontSize: 10,
            textAlign: 'center',

        },
        Img0: {
            width: '120%',
            height: 100,
            position: 'absolute',
            top: 0,
            left: 0,
            padding: 0,
            margin: 0,
        },
        Img1: {
            width: '120%',
            position: 'absolute',
            bottom: 0,
            left: 0,
            padding: 0,
            margin: 0,
        },
        Img2: {
            width: 70,
            height: 70,
            position: 'absolute',
            bottom: 55,
            left: 75,
            padding: 0,
            margin: 0,
        },
        Img3: {
            width: 70,
            height: 70,
            position: 'absolute',
            bottom: 55,
            left: 5,
            padding: 0,
            margin: 0,
        },
        pie: {
            textAlign: 'center',
            position: 'absolute',
            bottom: 60,
            width: "110%"
        },
        tableCell22: {
            fontSize: 10,
            textAlign: 'center',
            verticalAlign: 'middle',
        },
        centeredContent: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            //height: '100%',
        },
        altura: {
            marginTop: altura - 2,
            fontSize: 12
        },
        f1: {
            fontWeight: 'bold',
            fontSize: 10,
            fontFamily: 'Roboto'
        },
        f2: {
            padding: 1,
            backgroundColor: '#800000',
            color: 'white',
        },
        boldText: {
            fontSize: 10,
            fontFamily: 'C1',
            textDecoration: 'underline'
        }
    });
    /* .centro-total {
        display: flex;
        justify-content: center;
        place-items: center;
      } */
    const MTL = productos.reduce((acc, product) => acc + parseFloat(product.ml), 0);
    const Total = productos.reduce((acc, product) => acc + parseFloat(product.precioTotal), 0);
    const area = productos.reduce((acc, product) => acc + parseFloat(product.area), 0);
    const cemento = parseInt((area * 0.08) * 7 + 2) + 1
    const arena = parseInt(area * 0.08 * 0.7) + 1
    const agua = parseInt(area * 0.008 * 500) + 1
    const fierro = parseInt((area * 6.67) / 12) + 1
    return (
        <PDFViewer width="100%" height="800">
            <Document>
                <Page size="A4" style={styles.page}>
                    <View style={{ ...styles.section, marginTop: 50 }}>
                        <Text style={{ ...styles.heading }} >PRESUPUESTO DE LOSA PRETENSADA</Text>
                        <Text style={{ ...styles.text }}>
                            <Text style={styles.boldText}>FECHA:</Text> {fecha}
                        </Text>
                        <Text style={styles.text}>
                            <Text style={styles.boldText}>CLIENTE:</Text> {cliente.nombre}
                        </Text>
                        <Text style={styles.text}>
                            <Text style={styles.boldText}>DIRECCION: </Text>{cliente.direccion}
                        </Text>
                        <Text style={styles.text}>
                            <Text style={styles.boldText}>ENCARGADO DE OBRA: </Text>{encargado}
                        </Text>
                    </View>

                    <View style={styles.section}>
                        <Text style={styles.heading2}>Ref. Cotización de Viguetas Pretensadas y Complemento</Text>
                        <Text style={{ ...styles.text, ...styles.f1 }}>Sr. Cliente:</Text>
                        <Text style={styles.text}>
                            Nos es grato hacerle llegar a Ud. la cotización correspondiente de viguetas pretensadas y complemento alivianante HORMI-TEC.
                            Nuestra vigueta de hormigón pretensado, con sección de {`"T"`} invertida, posee características de SUPER TRABA en el coronamiento
                            de la vigueta que incrementan considerablemente la adherencia mecánica entre la vigueta y la losa hormigonada en sitio,
                            evitando el deslizamiento entre ambos para la absorción de esfuerzos rasantes.
                        </Text>
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.heading3}>ESPECIFICACIONES TECNICAS</Text>
                        <View style={styles.table}>
                            <View style={styles.tableRow}>
                                <View style={styles.tableCol2}><Text style={styles.text2}>* Carga Muerta: 264,00 Kg/m2</Text></View>
                                <View style={styles.tableCol2}><Text style={styles.text2}>* Tabiquería: 100,00 Kg/m2</Text></View>
                            </View>
                            <View style={styles.tableRow}>
                                <View style={styles.tableCol2}><Text style={styles.text2}>* Carga de uso: 200 Kg/m2</Text></View>
                                <View style={styles.tableCol2}><Text style={styles.text2}>* Complemento: 12x43x100 cms.</Text></View>
                            </View>
                            <View style={styles.tableRow}>
                                <View style={styles.tableCol2}><Text style={styles.text2}>* Carpeta de compresión: 5 cms.</Text></View>
                                <View style={styles.tableCol2}><Text style={styles.text2}>* Altura de losa final: 17 cms.</Text></View>
                            </View>
                            <View style={styles.tableRow}>
                                <View style={styles.tableCol3}><Text style={styles.text2}>* Separación entre ejes de Viguetas: 50 cms.</Text></View>
                            </View>
                        </View>
                    </View>

                    <View style={styles.section}>
                        <View style={styles.table}>
                            <View style={styles.tableRow}>
                                <View style={{ ...styles.tableCol, width: '30%', ...styles.f2 }}><Text style={{ ...styles.tableCell, ...styles.f1 }}>Producto</Text></View>
                                <View style={{ ...styles.tableCol, width: '20%', ...styles.f2 }}><Text style={{ ...styles.tableCell, ...styles.f1 }}>Pzas.</Text></View>
                                <View style={{ ...styles.tableCol, width: '20%', ...styles.f2 }}><Text style={{ ...styles.tableCell, ...styles.f1 }}>M.L.</Text></View>
                                <View style={{ ...styles.tableCol, width: '15%', ...styles.f2 }}><Text style={{ ...styles.tableCell, ...styles.f1 }}>Área / m2</Text></View>
                                <View style={{ ...styles.tableCol, width: '15%', ...styles.f2 }}><Text style={{ ...styles.tableCell, ...styles.f1 }}>Precio</Text></View>
                            </View>

                            <View style={styles.tableRow}>

                                <View style={{ ...styles.tableCol, width: '30%', padding: 1, }}>
                                    {productos.map((producto, index) => (
                                        <Text key={index + producto.nombre} style={styles.tableCell}>{producto.nombre}</Text>
                                    ))}
                                </View>
                                <View style={{ ...styles.tableCol, width: '20%', padding: 1, }}>
                                    {productos.map((producto, index) => (
                                        <Text key={index + producto.pzas} style={styles.tableCell}>{producto.pzas}</Text>
                                    ))}
                                </View>
                                <View style={{ ...styles.tableCol, width: '20%', padding: 1, }}><Text style={{ ...styles.tableCell, ...(altura ? styles.altura : {}) }}>{MTL}</Text></View>
                                <View style={{ ...styles.tableCol, width: '15%', padding: 1, }}><Text style={{ ...styles.tableCell, ...(altura ? styles.altura : {}) }}>{area}</Text></View>
                                <View style={{ ...styles.tableCol, width: '15%', padding: 1, }}><Text style={{ ...styles.tableCell, ...(altura ? styles.altura : {}) }}>{Total.toFixed(2)}</Text></View>
                            </View>

                        </View>
                        <Text style={{ ...styles.text, textAlign: 'right', marginRight: 10, fontFamily: 'Roboto' }}>PRECIO NO FACTURADO Y CON DESCUENTO: Bs. {precioTotal.toFixed(2)}</Text>
                    </View>


                    <View style={{ ...styles.section, margin: 0 }}>
                        <Text style={styles.text}>*Estos precios incluyen los impuestos de ley.</Text>
                        <Text style={styles.text}>*La validez de la oferta es de SEIS días.</Text>
                        <Text style={styles.text}>*Material puesto en obra, incluye descarguio.</Text>
                        <Text style={styles.text}>*ASESORAMIENTO TÉCNICO GRATUITO en el momento que Ud. requiera.</Text>
                    </View>

                    <View style={{ ...styles.section, margin: 0 }}>
                        <View style={styles.table}>
                            <View style={styles.tableRow}>
                                <View style={{ ...styles.tableCol3, backgroundColor: '#800000', color: 'white' }}><Text style={{ ...styles.text, fontWeight: 'bold', fontSize: 12, fontFamily: 'C1' }}>Rendimiento de materiales para losa (No incluidos en presupuesto)</Text></View>
                            </View>
                            <View style={styles.tableRow}>
                                <View style={styles.tableCol2}><Text style={styles.text}>Cemento: {cemento} Bolsas</Text></View>
                                <View style={styles.tableCol2}><Text style={styles.text}>Arena: {arena} m3</Text></View>
                            </View>
                            <View style={styles.tableRow}>
                                <View style={styles.tableCol2}><Text style={styles.text}>Grava: {arena} m3</Text></View>
                                <View style={styles.tableCol2}><Text style={styles.text}>Agua: {agua} lt</Text></View>
                            </View>
                            <View style={styles.tableRow}>
                                <View style={styles.tableCol2}><Text style={styles.text}>{`Solera 2" x 4": 14 m`}</Text></View>
                                <View style={styles.tableCol2}><Text style={styles.text}>{`Puntales f  3": 18 Pzas.`}</Text></View>
                            </View>
                            <View style={styles.tableRow}>
                                <View style={styles.tableCol2}><Text style={styles.text}>Fierro de 6 mm: {fierro} Barras</Text></View>
                                <View style={styles.tableCol2}><Text style={styles.text}>Fierro de 12 mm: A requerimiento de obra</Text></View>
                            </View>

                        </View>
                    </View>

                    <View style={styles.pie} fixed>
                        <Text style={{ ...styles.text, fontSize: 13 }}>Tec. Cristian Jhonatan Rodriguez Miranda</Text>
                        <Text style={{ ...styles.text, color: '#800000' }}>EJECUTIVO DE VENTAS</Text>
                        <Text style={{ ...styles.text, color: '#800000' }}>CELULAR: 61879391</Text>
                    </View>
                    <Image style={styles.Img0} alt={"Cargando Imagen...."} src={'/icons/h/4.png'} fixed />
                    <Image style={styles.Img1} alt={"Cargando Imagen...."} src={'/icons/h/1.png'} fixed />
                    <Image style={styles.Img2} alt={"Cargando Imagen...."} src={'/icons/h/2.png'} fixed />
                    <Image style={styles.Img3} alt={"Cargando Imagen...."} src={'/icons/h/3.png'} fixed />

                </Page>
            </Document>
        </PDFViewer >
    );
};

export default ProformaPDF;
