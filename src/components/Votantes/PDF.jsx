import React, { useState } from 'react';
import { PDFViewer, PDFDownloadLink, Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import { Dialog } from 'primereact/dialog';

/* const styles = StyleSheet.create({
    page: {
        padding: 30,
    },
    title: {
        fontSize: 20,
        marginBottom: 20,
        textAlign: 'center',
    },
    section: {
        marginBottom: 10,
    },
    table: {
        width: '100%',
        borderWidth: 1,
        borderColor: '#000',
        borderStyle: 'solid',
    },
    tableRow: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#000',
        borderBottomStyle: 'solid',
    },
    tableCell: {
        flex: 1,
        textAlign: 'center'
    },
    header: {
        backgroundColor: '#f0f0f0',
        fontWeight: 'bold',
    },
}); */
const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        textAlign: 'center',
        textDecoration:'underline'
    },
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
    },
    heading2: {
        fontSize: 12,
        marginBottom: 10,
        fontWeight: 'bold',
        textAlign: 'right',
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
    f1: {
        fontWeight: 'bold',
        fontSize: 10,
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

const VoterPDF = ({ voter }) => {
    const { nombre, ci, categories } = voter;
    const activeCategories = Object.entries(categories).filter(([, value]) => value.enabled);

    return (
        <Document>
            <Page style={styles.page}>
                <Text style={styles.title}>Votante: {nombre}</Text>
                <View style={styles.section}>
                    <Text>Nombre: {nombre}</Text>
                    <Text>CI: {ci}</Text>
                </View>
                <View style={styles.table}>
                    <View style={{ ...styles.tableRow, backgroundColor: "#f0f0f0" }}>
                        <View style={{ ...styles.tableCol, width: '10%', }}><Text style={{ ...styles.tableCell, }}>Nº</Text></View>
                        <View style={{ ...styles.tableCol, width: '40%', }}><Text style={{ ...styles.tableCell, }}>Comandos.</Text></View>
                        <View style={{ ...styles.tableCol, width: '25%', }}><Text style={{ ...styles.tableCell, }}>Habilitado</Text></View>
                        <View style={{ ...styles.tableCol, width: '25%', }}><Text style={{ ...styles.tableCell, }}>Emitió Voto</Text></View>
                    </View>
                    {activeCategories.map(([key, value], index) => (
                        <View key={key} style={styles.tableRow}>
                            <View style={{ ...styles.tableCol, width: '10%', padding: 20, }}><Text style={styles.tableCell}>{index + 1}</Text></View>
                            <View style={{ ...styles.tableCol, width: '40%', padding: 20, }}><Text style={styles.tableCell}>{key.toLocaleUpperCase()}</Text></View>
                            <View style={{ ...styles.tableCol, width: '25%', padding: 20, }}><Text style={styles.tableCell}>{" "}</Text></View>
                            <View style={{ ...styles.tableCol, width: '25%', padding: 20, }}><Text style={styles.tableCell}>{" "}</Text></View>
                        </View>
                    ))}
                </View>
            </Page>
        </Document>
    );
};

export default VoterPDF;

export const VerPdfVotante = ({ voter, setDocumento, documento }) => {
    const hideModal = () => {
        setDocumento(false);
    };
    return (<Dialog
        visible={documento}
        style={{ width: '80vw' }}
        onHide={hideModal}
        modal>
        <PDFViewer width="100%" height="800">
            <VoterPDF voter={voter} />
        </PDFViewer>
    </Dialog>)
}