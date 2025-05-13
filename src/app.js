import { NovuUI } from "@novu/js/ui";

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("novu-inbox");

  if (!container) {
    console.error("Novu inbox container element not found");
    return;
  }

  try {
    const novu = new NovuUI({
      options: {
        applicationIdentifier: "YOUR_APP_ID", // Replace with your Novu app ID
        subscriberId: "YOUR_SUBSCRIBER_ID", // Replace with your subscriber ID
      },
    });

    novu.mountComponent({
      name: "Inbox",
      props: {},
      element: container,
    });

    // Store instance for cleanup
    window.novuInstance = novu;
  } catch (error) {
    console.error("Failed to initialize Novu inbox:", error);
  }
});

// Cleanup function
window.addEventListener("beforeunload", () => {
  if (window.novuInstance) {
    try {
      window.novuInstance.unmountComponent(
        document.getElementById("novu-inbox")
      );
    } catch (error) {
      console.error("Failed to unmount Novu inbox:", error);
    }
  }
});
